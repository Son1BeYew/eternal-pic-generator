const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/User');

module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });

  // Google Strategy
  passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user exists
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
          return done(null, user);
        }

        // Check if user exists with same email (link accounts if desired, or error)
        // Here we just look for existing email and if so, maybe we should just return that user? 
        // Or create new. Let's create new or return existing.
        // If email exists but no googleId, it might be a local user logging in with Google.
        // We can update the googleId.
        const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;
        if(email) {
            user = await User.findOne({ email });
            if(user) {
                user.googleId = profile.id;
                await user.save();
                return done(null, user);
            }
        }

        const newUser = {
          googleId: profile.id,
          username: profile.displayName,
          email: email, // Google usually provides email
          avatar: profile.photos && profile.photos[0] ? profile.photos[0].value : ''
        };

        user = await User.create(newUser);
        done(null, user);
      } catch (err) {
        console.error(err);
        done(err, null);
      }
    }
  ));

  // Facebook Strategy
  passport.use(new FacebookStrategy({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "/api/auth/facebook/callback",
      profileFields: ['id', 'displayName', 'photos', 'email']
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ facebookId: profile.id });

        if (user) {
          return done(null, user);
        }

        const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;
        if(email) {
            user = await User.findOne({ email });
            if(user) {
                user.facebookId = profile.id;
                await user.save();
                return done(null, user);
            }
        }

        const newUser = {
          facebookId: profile.id,
          username: profile.displayName,
          email: email, // details.email could be null
          avatar: profile.photos && profile.photos[0] ? profile.photos[0].value : ''
        };

        user = await User.create(newUser);
        done(null, user);
      } catch (err) {
        console.error(err);
        done(err, null);
      }
    }
  ));

  // GitHub Strategy
  passport.use(new GitHubStrategy({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/api/auth/github/callback",
      scope: ['user:email']
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ githubId: profile.id });

        if (user) {
          return done(null, user);
        }

        const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;
        if(email) {
            user = await User.findOne({ email });
            if(user) {
                user.githubId = profile.id;
                await user.save();
                return done(null, user);
            }
        }

        const newUser = {
          githubId: profile.id,
          username: profile.username || profile.displayName,
          email: email,
          avatar: profile.photos && profile.photos[0] ? profile.photos[0].value : ''
        };

        user = await User.create(newUser);
        done(null, user);
      } catch (err) {
        console.error(err);
        done(err, null);
      }
    }
  ));
};
