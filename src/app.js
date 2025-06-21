const express = require('express');
// const userRoutes = require('./routes/user.routes');
// const authMiddleware = require('./middlewares/auth.middleware');

const app = express();

app.use(express.json());


// app.use('/api/users', authMiddleware, userRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
