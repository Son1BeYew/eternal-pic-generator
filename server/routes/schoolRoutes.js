const express = require('express');
const router = express.Router();
const {
  getSchools,
  getSchool,
  createSchool,
  updateSchool,
  deleteSchool,
  toggleSchool,
} = require('../controllers/schoolController');
const { protect, authorize } = require('../middleware/authMiddleware');

// Public routes
router.get('/', getSchools);
router.get('/:id', getSchool);

// Admin only routes
router.post('/', protect, authorize('admin'), createSchool);
router.put('/:id', protect, authorize('admin'), updateSchool);
router.delete('/:id', protect, authorize('admin'), deleteSchool);
router.put('/:id/toggle', protect, authorize('admin'), toggleSchool);

module.exports = router;
