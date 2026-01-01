const express = require('express');
const router = express.Router();
const { generateGraduation } = require('../controllers/graduationController');
const { protect } = require('../middleware/authMiddleware');

// Generate graduation photo
router.post('/', protect, generateGraduation);

module.exports = router;
