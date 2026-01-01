const { bucket } = require('../config/firebase');
const { v4: uuidv4 } = require('uuid');

/**
 * Upload base64 image to Firebase Storage
 * @param {string} base64Data - Base64 encoded image data
 * @param {string} folder - Folder name in storage (e.g., 'scenes', 'avatars')
 * @returns {Promise<string>} - Public URL of uploaded image
 */
const uploadBase64ToFirebase = async (base64Data, folder = 'images') => {
  try {
    // Remove data URL prefix if exists
    const base64Image = base64Data.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Image, 'base64');

    // Generate unique filename
    const filename = `${folder}/${uuidv4()}.png`;
    const file = bucket.file(filename);

    // Upload to Firebase Storage
    await file.save(buffer, {
      metadata: {
        contentType: 'image/png',
        metadata: {
          firebaseStorageDownloadTokens: uuidv4(),
        }
      },
      public: true,
    });

    // Make file publicly accessible
    await file.makePublic();

    // Get public URL
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;

    console.log('Image uploaded to Firebase:', publicUrl);
    return publicUrl;
  } catch (error) {
    console.error('Error uploading to Firebase:', error);
    throw new Error('Failed to upload image to Firebase Storage');
  }
};

/**
 * Delete image from Firebase Storage
 * @param {string} imageUrl - Public URL of the image
 * @returns {Promise<boolean>} - Success status
 */
const deleteFromFirebase = async (imageUrl) => {
  try {
    // Extract filename from URL
    const urlParts = imageUrl.split('/');
    const filename = urlParts.slice(-2).join('/'); // folder/filename.png

    const file = bucket.file(filename);
    await file.delete();

    console.log('Image deleted from Firebase:', filename);
    return true;
  } catch (error) {
    console.error('Error deleting from Firebase:', error);
    return false;
  }
};

module.exports = {
  uploadBase64ToFirebase,
  deleteFromFirebase,
};
