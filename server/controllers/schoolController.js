const School = require('../models/School');

// @desc    Get all schools
// @route   GET /api/schools
// @access  Public
const getSchools = async (req, res) => {
  try {
    const schools = await School.find({ isActive: true }).sort({ name: 1 });

    res.status(200).json({
      success: true,
      count: schools.length,
      data: schools,
    });
  } catch (error) {
    console.error('Error fetching schools:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch schools',
      error: error.message,
    });
  }
};

// @desc    Get single school
// @route   GET /api/schools/:id
// @access  Public
const getSchool = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);

    if (!school) {
      return res.status(404).json({
        success: false,
        message: 'School not found',
      });
    }

    res.status(200).json({
      success: true,
      data: school,
    });
  } catch (error) {
    console.error('Error fetching school:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch school',
      error: error.message,
    });
  }
};

// @desc    Create school
// @route   POST /api/schools
// @access  Private/Admin
const createSchool = async (req, res) => {
  try {
    const { name, shortName, logo, gownColor, isActive } = req.body;

    const school = await School.create({
      name,
      shortName,
      logo,
      gownColor,
      isActive,
    });

    res.status(201).json({
      success: true,
      data: school,
    });
  } catch (error) {
    console.error('Error creating school:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create school',
      error: error.message,
    });
  }
};

// @desc    Update school
// @route   PUT /api/schools/:id
// @access  Private/Admin
const updateSchool = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);

    if (!school) {
      return res.status(404).json({
        success: false,
        message: 'School not found',
      });
    }

    const updatedSchool = await School.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      data: updatedSchool,
    });
  } catch (error) {
    console.error('Error updating school:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update school',
      error: error.message,
    });
  }
};

// @desc    Delete school
// @route   DELETE /api/schools/:id
// @access  Private/Admin
const deleteSchool = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);

    if (!school) {
      return res.status(404).json({
        success: false,
        message: 'School not found',
      });
    }

    await school.deleteOne();

    res.status(200).json({
      success: true,
      message: 'School deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting school:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete school',
      error: error.message,
    });
  }
};

// @desc    Toggle school active status
// @route   PUT /api/schools/:id/toggle
// @access  Private/Admin
const toggleSchool = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);

    if (!school) {
      return res.status(404).json({
        success: false,
        message: 'School not found',
      });
    }

    school.isActive = !school.isActive;
    await school.save();

    res.status(200).json({
      success: true,
      data: school,
    });
  } catch (error) {
    console.error('Error toggling school:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to toggle school',
      error: error.message,
    });
  }
};

module.exports = {
  getSchools,
  getSchool,
  createSchool,
  updateSchool,
  deleteSchool,
  toggleSchool,
};
