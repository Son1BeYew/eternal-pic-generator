const admin = require('firebase-admin');
const path = require('path');

let firebaseApp;

try {
  const serviceAccount = require('./firebase-service-account.json');
  
  firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'enternal-de601.firebasestorage.app'
  });

  console.log('Firebase Admin initialized successfully');
} catch (error) {
  console.error('Error initializing Firebase Admin:', error);
}

const bucket = admin.storage().bucket();

module.exports = { admin, bucket };
