import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes/user.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
  
// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(400).json({ message: err.message });
});

export default app;

// const express = require('express');
// const authRoutes = require('./routes/authRoutes/');
// // const authMiddleware = require('./middlewares/auth.middleware');

// const app = express();

// // Middlewares
// app.use(express.json());

// app.use('/api/auth',authRoutes);

// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// module.exports = app;