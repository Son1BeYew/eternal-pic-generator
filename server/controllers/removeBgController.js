const Scene = require('../models/Scene');
const { uploadBase64ToFirebase } = require('../utils/uploadToFirebase');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const removeBackground = async (req, res) => {
  try {
    const { baseImage } = req.body;

    if (!baseImage) {
      return res.status(400).json({ 
        success: false,
        message: 'Please provide a base image' 
      });
    }

    if (!process.env.REMOVE_BG_API_KEY) {
      return res.status(500).json({
        success: false,
        message: 'Remove.bg API key is not configured'
      });
    }

    console.log('Removing background with remove.bg API...');
    const base64Data = baseImage.replace(/^data:image\/\w+;base64,/, '');

    // Call remove.bg API
    const response = await fetch('https://api.remove.bg/v1.0/removebg', {
      method: 'POST',
      headers: {
        'X-Api-Key': process.env.REMOVE_BG_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image_file_b64: base64Data,
        size: 'auto',
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Remove.bg API error:', error);
      throw new Error(error.errors?.[0]?.title || 'Failed to remove background');
    }

    // Get the result as buffer
    const resultBuffer = await response.buffer();
    
    // Convert buffer to base64
    const resultBase64 = `data:image/png;base64,${resultBuffer.toString('base64')}`;

    // Upload to Firebase Storage
    console.log('Uploading result to Firebase Storage...');
    const imageUrl = await uploadBase64ToFirebase(resultBase64, 'no-bg');

    // Save to database
    const scene = await Scene.create({
      user: req.user._id,
      prompt: 'Background removed',
      style: 'realistic',
      imageUrl,
      status: 'completed',
    });

    res.status(201).json({
      success: true,
      data: scene,
    });
  } catch (error) {
    console.error('Error removing background:', error);
    res.status(500).json({ 
      success: false,
      message: error.message || 'Failed to remove background',
      error: error.message 
    });
  }
};

// @desc    Get remove.bg API credits info
// @route   GET /api/remove-bg/credits
// @access  Private/Admin
const getCredits = async (req, res) => {
  try {
    if (!process.env.REMOVE_BG_API_KEY) {
      return res.status(500).json({
        success: false,
        message: 'Remove.bg API key is not configured'
      });
    }

    const response = await fetch('https://api.remove.bg/v1.0/account', {
      headers: {
        'X-Api-Key': process.env.REMOVE_BG_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch credits info');
    }

    const data = await response.json();

    res.status(200).json({
      success: true,
      data: {
        credits: data.data.attributes.credits,
        api_key: data.data.attributes.api.free_calls,
      },
    });
  } catch (error) {
    console.error('Error fetching credits:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to fetch credits info',
      error: error.message 
    });
  }
};

module.exports = {
  removeBackground,
  getCredits,
};
