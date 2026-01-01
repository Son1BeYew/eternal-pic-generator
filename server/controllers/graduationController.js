const Scene = require('../models/Scene');
const { uploadBase64ToFirebase } = require('../utils/uploadToFirebase');
const Replicate = require('replicate');

// Initialize Replicate
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// @desc    Generate graduation photo using Replicate nano-banana
// @route   POST /api/graduation
// @access  Private
const generateGraduation = async (req, res) => {
  try {
    const { personImage, outfitImage, schoolId } = req.body;

    if (!personImage || !outfitImage) {
      return res.status(400).json({ 
        success: false,
        message: 'Please provide both person image and outfit image' 
      });
    }

    if (!process.env.REPLICATE_API_TOKEN) {
      return res.status(500).json({
        success: false,
        message: 'Replicate API token is not configured'
      });
    }

    // Get school info - REQUIRED
    if (!schoolId) {
      return res.status(400).json({ 
        success: false,
        message: 'Please select a school' 
      });
    }

    const School = require('../models/School');
    const school = await School.findById(schoolId);
    
    if (!school) {
      return res.status(404).json({ 
        success: false,
        message: 'School not found' 
      });
    }

    const schoolPrompt = school.prompt;
    const schoolName = school.name;

    console.log('Generating graduation photo with Replicate nano-banana...');
    console.log('School:', schoolName);
    console.log('Using prompt:', schoolPrompt);

    // Create prediction using nano-banana model
    // Try swapping image order: outfit first, then person
    const prediction = await replicate.predictions.create({
      version: "google/nano-banana",
      input: {
        image_input: [outfitImage, personImage], // Swapped order
        prompt: schoolPrompt,
        aspect_ratio: "match_input_image",
      }
    });

    console.log('Prediction created:', prediction.id);
    console.log('Prediction status:', prediction.status);

    // Wait for prediction to complete
    let completedPrediction = prediction;
    while (completedPrediction.status !== 'succeeded' && completedPrediction.status !== 'failed') {
      await new Promise(resolve => setTimeout(resolve, 1000));
      completedPrediction = await replicate.predictions.get(prediction.id);
      console.log('Prediction status:', completedPrediction.status);
    }

    if (completedPrediction.status === 'failed') {
      throw new Error(completedPrediction.error || 'Prediction failed');
    }

    console.log('Prediction output:', completedPrediction.output);

    let imageUrl = '';

    // Get the output URL
    const output = completedPrediction.output;
    if (Array.isArray(output) && output.length > 0) {
      imageUrl = output[0];
    } else if (typeof output === 'string') {
      imageUrl = output;
    }

    // Download and upload to Firebase
    if (imageUrl && imageUrl.startsWith('http')) {
      console.log('Downloading image from:', imageUrl);
      const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
      const response = await fetch(imageUrl);
      const buffer = await response.buffer();
      const base64Data = `data:image/png;base64,${buffer.toString('base64')}`;
      
      console.log('Uploading to Firebase Storage...');
      imageUrl = await uploadBase64ToFirebase(base64Data, 'graduation');
    } else {
      console.log('No valid image URL from Replicate, using placeholder');
      imageUrl = `https://via.placeholder.com/1024x1024/10b981/ffffff?text=Graduation+Photo`;
    }

    // Save to database
    const scene = await Scene.create({
      user: req.user._id,
      prompt: `Graduation photo - ${schoolName}`,
      style: 'realistic',
      imageUrl,
      status: 'completed',
    });

    res.status(201).json({
      success: true,
      data: scene,
    });
  } catch (error) {
    console.error('Error generating graduation photo:', error);
    res.status(500).json({ 
      success: false,
      message: error.message || 'Failed to generate graduation photo',
      error: error.message 
    });
  }
};

module.exports = {
  generateGraduation,
};
