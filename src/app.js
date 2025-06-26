const express = require('express');
const authRoutes = require('./routes/authRoutes/');
const categoryRoutes = require('./routes/categoryRoutes/category.routes')
// const authMiddleware = require('./middlewares/auth.middleware');

const app = express();

// Middlewares
app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api/categories',categoryRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;