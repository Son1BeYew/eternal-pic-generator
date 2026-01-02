const admin = require("firebase-admin");
const path = require("path");

let firebaseApp;
let bucket = null;

try {
  let serviceAccount;

  // Try to load from JSON file first
  try {
    serviceAccount = require("./firebase-service-account.json");
    console.log("Firebase: Using service account from JSON file");
  } catch (fileError) {
    // If file doesn't exist, try loading from environment variables
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      try {
        serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
        console.log(
          "Firebase: Using service account from environment variable"
        );
      } catch (parseError) {
        throw new Error(
          "Failed to parse FIREBASE_SERVICE_ACCOUNT from environment variables"
        );
      }
    } else {
      // If neither exists, try individual environment variables
      if (
        process.env.FIREBASE_PROJECT_ID &&
        process.env.FIREBASE_CLIENT_EMAIL &&
        process.env.FIREBASE_PRIVATE_KEY
      ) {
        serviceAccount = {
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        };
        console.log(
          "Firebase: Using service account from individual environment variables"
        );
      } else {
        throw new Error(
          "Firebase service account not found. Please provide either:\n" +
            "1. firebase-service-account.json file in server/config/\n" +
            "2. FIREBASE_SERVICE_ACCOUNT environment variable (JSON string)\n" +
            "3. FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY environment variables"
        );
      }
    }
  }

  firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket:
      process.env.FIREBASE_STORAGE_BUCKET ||
      "enternal-de601.firebasestorage.app",
  });

  bucket = admin.storage().bucket();
  console.log("Firebase Admin initialized successfully");
} catch (error) {
  console.error("Error initializing Firebase Admin:", error.message);
  console.warn(
    "Firebase features will be disabled. Some functionality may not work."
  );
}

module.exports = { admin, bucket };
