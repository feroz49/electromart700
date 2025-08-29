// filepath: backend/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Turjo:Test123@cluster0.dmtticy.mongodb.net/retryWrites=true&w=majority&appName=Cluster0'
)
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;