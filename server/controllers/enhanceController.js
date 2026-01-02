const Scene = require("../models/Scene");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const {
  uploadBase64ToFirebase,
  deleteFromFirebase,
} = require("../utils/uploadToFirebase");

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Helper function to enhance image with base image input using Gemini AI
const enhanceImageWithGemini = async (
  base64Image,
  prompt,
  folder = "enhanced"
) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-3-pro-image-preview",
    });

    console.log("Enhancing image with Gemini AI...");
    console.log("Prompt:", prompt);

    // Parse base64 image
    const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, "");
    const mimeType =
      base64Image.match(/^data:image\/(\w+);base64,/)?.[1] || "png";

    // Prepare parts with both image and text
    const parts = [
      {
        inlineData: {
          data: base64Data,
          mimeType: `image/${mimeType}`,
        },
      },
      {
        text: prompt,
      },
    ];

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: parts,
        },
      ],
    });

    const response = result.response;
    let imageUrl = "";

    if (response.candidates && response.candidates[0]) {
      const candidate = response.candidates[0];
      if (candidate.content && candidate.content.parts) {
        for (const part of candidate.content.parts) {
          if (part.inlineData && part.inlineData.data) {
            const resultMimeType = part.inlineData.mimeType || "image/png";
            const resultBase64Data = `data:${resultMimeType};base64,${part.inlineData.data}`;

            console.log("Uploading enhanced image to Firebase Storage...");
            imageUrl = await uploadBase64ToFirebase(resultBase64Data, folder);
            break;
          }
        }
      }
    }

    if (!imageUrl) {
      console.log("No image enhanced by Gemini, using placeholder");
      imageUrl = `https://via.placeholder.com/1024x1024/10b981/ffffff?text=Enhancement+Failed`;
    }

    return imageUrl;
  } catch (error) {
    console.error("Error in enhanceImageWithGemini:", error);
    throw new Error(`Failed to enhance image: ${error.message}`);
  }
};

// @desc    Enhance image quality using Gemini AI
// @route   POST /api/enhance
// @access  Private
const enhanceImage = async (req, res) => {
  try {
    const { baseImage, prompt, enhanceLevel = "medium" } = req.body;

    if (!baseImage) {
      return res.status(400).json({
        success: false,
        message: "Please provide a base image",
      });
    }

    // Enhance level prompts
    const enhancePrompts = {
      low: "Slightly enhance this image: improve quality, sharpen slightly, better colors",
      medium:
        "Enhance this image: improve quality significantly, sharpen details, enhance colors, better contrast, higher resolution",
      high: "Highly enhance this image: 4K quality, ultra sharp details, professional photography quality, perfect lighting, enhanced colors, maximum resolution, studio quality",
    };

    // Use custom prompt if provided, otherwise use enhance level prompt
    const enhancePrompt =
      prompt || enhancePrompts[enhanceLevel] || enhancePrompts.medium;
    const fullPrompt = `${enhancePrompt}. Keep the same subject and composition, only improve quality.`;

    console.log("Enhancing image with level:", enhanceLevel);

    // Enhance image with Gemini AI
    const imageUrl = await enhanceImageWithGemini(
      baseImage,
      fullPrompt,
      "enhanced"
    );

    // Save enhanced image to Scene model
    const scene = await Scene.create({
      user: req.user._id,
      prompt: fullPrompt,
      style: "realistic",
      imageUrl,
      status: "completed",
    });

    res.status(201).json({
      success: true,
      data: scene,
    });
  } catch (error) {
    console.error("Error enhancing image:", error);
    res.status(500).json({
      success: false,
      message: "Failed to enhance image",
      error: error.message,
    });
  }
};

module.exports = {
  enhanceImage,
};

