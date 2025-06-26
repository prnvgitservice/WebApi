import app from './app.js';
import connectDB from './config/db.js';

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// require('dotenv').config();
// const app = require('./app');
// const connectDB = require('./config/db');

// const PORT = process.env.PORT || 5000;

// connectDB();

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });
