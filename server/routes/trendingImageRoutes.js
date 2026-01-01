const express = require('express');
const router = express.Router();
const {
  getTrendingImages,
  getAllTrendingImages,
  getTrendingImage,
  createTrendingImage,
  updateTrendingImage,
  deleteTrendingImage,
  generateTrendingImage,
  getTrendingStats,
  getPopularTrending,
} = require('../controllers/trendingImageController');
const { protect, admin } = require('../middleware/authMiddleware');

// Public routes
router.get('/', getTrendingImages);
router.get('/stats', getTrendingStats);
router.get('/popular', getPopularTrending);

// Admin routes (must be before /:id to avoid route conflict)
router.get('/admin/all', protect, admin, getAllTrendingImages);
router.post('/', protect, admin, createTrendingImage);
router.put('/:id', protect, admin, updateTrendingImage);
router.delete('/:id', protect, admin, deleteTrendingImage);

// Generate trending image (protected, for users)
router.post('/generate', protect, generateTrendingImage);

// Public route with ID param (must be last)
router.get('/:id', getTrendingImage);

module.exports = router;
