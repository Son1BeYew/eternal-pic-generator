const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB, isConnected } = require("./config/db");
const passport = require("passport");

// Load environment variables
dotenv.config();

// Passport config
require("./config/passport")(passport);

// Connect to Database
connectDB().catch((err) => {
  console.error("Failed to connect to database:", err);
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Middleware to check MongoDB connection for database routes
app.use("/api", (req, res, next) => {
  // Allow health check or non-db routes
  if (
    req.path === "/health" ||
    req.path.startsWith("/auth/google") ||
    req.path.startsWith("/auth/facebook")
  ) {
    return next();
  }

  // Check MongoDB connection for database operations
  if (!isConnected()) {
    return res.status(503).json({
      success: false,
      message: "Database is not connected. Please check MongoDB connection.",
    });
  }

  next();
});

// Passport middleware
app.use(passport.initialize());
// app.use(passport.session()); // If using sessions. For JWT, typically not needed unless using session-based OAuth flow before token issue.

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/images", require("./routes/imageRoutes"));
app.use("/api/enhance", require("./routes/enhanceRoutes"));
app.use("/api/prompts", require("./routes/promptRoutes"));
app.use("/api/remove-bg", require("./routes/removeBgRoutes"));
app.use("/api/schools", require("./routes/schoolRoutes"));
app.use("/api/graduation", require("./routes/graduationRoutes"));
app.use("/api/trending-images", require("./routes/trendingImageRoutes"));

// 404 handler - must be after all routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
});

// Error handler middleware - must be last
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
