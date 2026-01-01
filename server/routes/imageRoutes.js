const express = require('express');
const router = express.Router();
const {
  generateScene,
  getTrending,
  getUserScenes,
  getScene,
  deleteScene,
  toggleFavorite,
} = require('../controllers/imageController');
const { protect } = require('../middleware/authMiddleware');

router.post('/generate', protect, generateScene);

// Trending images (public)
router.get('/trending', getTrending);

// Scene management
router.get('/scenes', protect, getUserScenes);
router.get('/scenes/:id', protect, getScene);
router.delete('/scenes/:id', protect, deleteScene);
router.put('/scenes/:id/favorite', protect, toggleFavorite);

module.exports = router;
