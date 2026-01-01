const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const passport = require('passport');

// Load environment variables
dotenv.config();

// Passport config
require('./config/passport')(passport);

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Passport middleware
app.use(passport.initialize());
// app.use(passport.session()); // If using sessions. For JWT, typically not needed unless using session-based OAuth flow before token issue.

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/images', require('./routes/imageRoutes'));
app.use('/api/prompts', require('./routes/promptRoutes'));
app.use('/api/remove-bg', require('./routes/removeBgRoutes'));
app.use('/api/schools', require('./routes/schoolRoutes'));
app.use('/api/graduation', require('./routes/graduationRoutes'));
app.use('/api/trending-images', require('./routes/trendingImageRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
