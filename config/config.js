require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    const MONGO_URL = process.env.MONGO_URL;
    
    if (!MONGO_URL) {
        console.error('Error: MONGO_URL not found in environment variables');
        process.exit(1);
    }

    try {
        await mongoose.connect(MONGO_URL);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;