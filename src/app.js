import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes/user.js';
import connectDB from './config/db.js';
import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

app.use(errorHandler)
  
export default app;