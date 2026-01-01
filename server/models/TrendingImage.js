const mongoose = require('mongoose');

const trendingImageSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add title'],
      trim: true,
    },
    prompt: {
      type: String,
      required: [true, 'Please add prompt'],
    },
    imageUrl: {
      type: String,
      required: [true, 'Please add image'],
    },
    category: {
      type: String,
      enum: ['portrait', 'landscape', 'creative', 'artistic', 'other'],
      default: 'other',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('TrendingImage', trendingImageSchema);
