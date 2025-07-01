import express from 'express';
import * as reviewController from '../controllers/review.controller.js';
import { protect } from '../middlewares/auth.middleware.js'; // Auth middleware

const router = express.Router();

// Protected routes
router.post('/', protect, reviewController.createReview);
router.put('/:reviewId', protect, reviewController.updateReview);
router.delete('/:reviewId', protect, reviewController.deleteReview);

// Public routes
router.get('/service/:serviceId', reviewController.getServiceReviews);
router.get('/service/:serviceId/stats', reviewController.getAverageRating);

export default router;
