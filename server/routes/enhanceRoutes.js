const express = require("express");
const router = express.Router();
const { enhanceImage } = require("../controllers/enhanceController");
const { protect } = require("../middleware/authMiddleware");

// Image enhancement routes
router.post("/", protect, enhanceImage);

module.exports = router;
