import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes/user.js';
import categoryRoutes from './routes/category.route.js';
import reviewRoutes from './routes/customerReviews.route.js';
import connectDB from './config/db.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import serviceRoutes from './routes/services.route.js';
import cors from 'cors';

dotenv.config();
connectDB()

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/serices', serviceRoutes);

app.use(errorHandler)
  
// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(400).json({ message: err.message });
});

export default app;