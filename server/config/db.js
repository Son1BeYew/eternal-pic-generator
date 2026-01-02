const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/eternalpic';
    
    const options = {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of 30
      socketTimeoutMS: 45000,
    };

    const conn = await mongoose.connect(mongoURI, options);
    
    // Only disable buffering after successful connection
    mongoose.set('bufferCommands', false);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    console.error('Please make sure MongoDB is running on your system.');
    console.error('You can start MongoDB with: mongod');
    console.error('Or check your MONGO_URI in .env file.');
    
    // Don't exit - allow server to start but warn about DB issues
    // Keep buffering enabled so queries will wait for connection
    console.warn('Server will start but database operations will wait for MongoDB connection.');
    return false;
  }
};

// Helper function to check if MongoDB is connected
const isConnected = () => {
  return mongoose.connection.readyState === 1; // 1 = connected
};

module.exports = { connectDB, isConnected };
