const mongoose = require('mongoose');

const sceneSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    prompt: {
      type: String,
      required: [true, 'Please add a prompt'],
    },
    style: {
      type: String,
      required: true,
      enum: ['realistic', 'anime', 'cartoon', 'painting'],
      default: 'realistic',
    },
    imageUrl: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending',
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Scene', sceneSchema);
