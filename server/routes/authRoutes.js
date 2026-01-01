const express = require('express');
const router = express.Router();
const passport = require('passport');
const { 
    registerUser, 
    loginUser, 
    getMe, 
    socialLoginSuccess, 
    socialLoginFailed 
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Local Auth
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

// Google Auth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login/failed' }),
  socialLoginSuccess
);

// Facebook Auth
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login/failed' }),
  socialLoginSuccess
);

router.get('/login/failed', socialLoginFailed);

module.exports = router;
