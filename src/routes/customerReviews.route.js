import express from 'express';
import * as reviewController from '../controllers/customerReviews.controller.js';
import authMiddleware from '../middleware/userMiddleware.js'; 

const router = express.Router();

// Protected routes
router.post('/', authMiddleware, reviewController.createReview);
router.put('/:reviewId', authMiddleware, reviewController.updateReview);
router.delete('/:reviewId', authMiddleware, reviewController.deleteReview);

// Public routes
router.get('/service/:serviceId', reviewController.getServiceReviews);
router.get('/service/:serviceId/stats', reviewController.getAverageRating);

export default router;
