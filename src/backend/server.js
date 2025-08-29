// filepath: backend/server.js
const express = require('express');
const connectDB = require('./db');

const app = express();

connectDB();

app.listen(5000, () => {
  console.log('Server started on port 5000');
});