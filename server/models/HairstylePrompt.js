const mongoose = require('mongoose');

const hairstylePromptSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true,
    },
    prompt: {
      type: String,
      required: [true, 'Please add a prompt'],
    },
    thumbnail: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    category: {
      type: String,
      default: 'hairstyle',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('HairstylePrompt', hairstylePromptSchema);
