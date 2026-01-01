const HairstylePrompt = require('../models/HairstylePrompt');

// @desc    Get all hairstyle prompts
// @route   GET /api/prompts/hairstyle
// @access  Public
const getHairstylePrompts = async (req, res) => {
  try {
    const prompts = await HairstylePrompt.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: prompts.length,
      data: prompts,
    });
  } catch (error) {
    console.error('Error fetching hairstyle prompts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch prompts',
      error: error.message,
    });
  }
};

// @desc    Get single hairstyle prompt
// @route   GET /api/prompts/hairstyle/:id
// @access  Public
const getHairstylePrompt = async (req, res) => {
  try {
    const prompt = await HairstylePrompt.findById(req.params.id);

    if (!prompt) {
      return res.status(404).json({
        success: false,
        message: 'Prompt not found',
      });
    }

    res.status(200).json({
      success: true,
      data: prompt,
    });
  } catch (error) {
    console.error('Error fetching prompt:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch prompt',
      error: error.message,
    });
  }
};

// @desc    Create hairstyle prompt
// @route   POST /api/prompts/hairstyle
// @access  Private/Admin
const createHairstylePrompt = async (req, res) => {
  try {
    const { name, prompt, thumbnail, isActive } = req.body;

    const newPrompt = await HairstylePrompt.create({
      name,
      prompt,
      thumbnail,
      isActive,
    });

    res.status(201).json({
      success: true,
      data: newPrompt,
    });
  } catch (error) {
    console.error('Error creating prompt:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create prompt',
      error: error.message,
    });
  }
};

// @desc    Update hairstyle prompt
// @route   PUT /api/prompts/hairstyle/:id
// @access  Private/Admin
const updateHairstylePrompt = async (req, res) => {
  try {
    const prompt = await HairstylePrompt.findById(req.params.id);

    if (!prompt) {
      return res.status(404).json({
        success: false,
        message: 'Prompt not found',
      });
    }

    const updatedPrompt = await HairstylePrompt.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      data: updatedPrompt,
    });
  } catch (error) {
    console.error('Error updating prompt:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update prompt',
      error: error.message,
    });
  }
};

// @desc    Delete hairstyle prompt
// @route   DELETE /api/prompts/hairstyle/:id
// @access  Private/Admin
const deleteHairstylePrompt = async (req, res) => {
  try {
    const prompt = await HairstylePrompt.findById(req.params.id);

    if (!prompt) {
      return res.status(404).json({
        success: false,
        message: 'Prompt not found',
      });
    }

    await prompt.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Prompt deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting prompt:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete prompt',
      error: error.message,
    });
  }
};

// @desc    Toggle hairstyle prompt active status
// @route   PUT /api/prompts/hairstyle/:id/toggle
// @access  Private/Admin
const toggleHairstylePrompt = async (req, res) => {
  try {
    const prompt = await HairstylePrompt.findById(req.params.id);

    if (!prompt) {
      return res.status(404).json({
        success: false,
        message: 'Prompt not found',
      });
    }

    prompt.isActive = !prompt.isActive;
    await prompt.save();

    res.status(200).json({
      success: true,
      data: prompt,
    });
  } catch (error) {
    console.error('Error toggling prompt:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to toggle prompt',
      error: error.message,
    });
  }
};

module.exports = {
  getHairstylePrompts,
  getHairstylePrompt,
  createHairstylePrompt,
  updateHairstylePrompt,
  deleteHairstylePrompt,
  toggleHairstylePrompt,
};
