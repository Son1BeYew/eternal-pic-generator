const express = require('express');
const router = express.Router();
const {
  removeBackground,
  getCredits,
} = require('../controllers/removeBgController');
const { protect, authorize } = require('../middleware/authMiddleware');

// Remove background
router.post('/', protect, removeBackground);

// Get API credits (admin only)
router.get('/credits', protect, authorize('admin'), getCredits);

module.exports = router;
