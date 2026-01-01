const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    // Not required if logging in via OAuth
  },
  fullName: {
    type: String,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  dateOfBirth: {
    type: Date
  },
  googleId: String,
  facebookId: String,
  role: {
    type: String,
    enum: ['user', 'admin', 'employee'],
    default: 'user'
  },
  avatar: String
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
