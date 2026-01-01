const express = require('express');
const router = express.Router();
const {
  getHairstylePrompts,
  getHairstylePrompt,
  createHairstylePrompt,
  updateHairstylePrompt,
  deleteHairstylePrompt,
  toggleHairstylePrompt,
} = require('../controllers/hairstylePromptController');
const { protect, authorize } = require('../middleware/authMiddleware');

// Public routes
router.get('/hairstyle', getHairstylePrompts);
router.get('/hairstyle/:id', getHairstylePrompt);

// Admin only routes
router.post('/hairstyle', protect, authorize('admin'), createHairstylePrompt);
router.put('/hairstyle/:id', protect, authorize('admin'), updateHairstylePrompt);
router.delete('/hairstyle/:id', protect, authorize('admin'), deleteHairstylePrompt);
router.put('/hairstyle/:id/toggle', protect, authorize('admin'), toggleHairstylePrompt);

module.exports = router;
