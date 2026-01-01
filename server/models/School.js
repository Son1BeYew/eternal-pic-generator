const mongoose = require('mongoose');

const schoolSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add school name'],
      trim: true,
    },
    shortName: {
      type: String,
      trim: true,
    },
    logo: {
      type: String,
    },
    prompt: {
      type: String,
      required: [true, 'Please add prompt for AI'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('School', schoolSchema);
