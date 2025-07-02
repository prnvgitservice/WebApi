import express from 'express';
import * as RatingController from '../controllers/ratingController.js';

const router = express.Router();

// Routes
router.post('/', RatingController.createRating);
router.get('/technician/:technicianId', RatingController.getTechnicianRatings);
router.get('/:ratingId', RatingController.getRatingById);
router.put('/:ratingId', RatingController.updateRating);

export default router;