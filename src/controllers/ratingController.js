import * as RatingService from '../services/ratingService.js';

// Create rating controller
export const createRating = async (req, res) => {
  try {
    const ratingData = req.body;
    const rating = await RatingService.createRatingService(ratingData);

    res.status(201).json({
      success: true,
      message: 'Rating added successfully',
      data: rating
    });
  } catch (error) {
    console.error('Add rating error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get technician ratings controller
export const getTechnicianRatings = async (req, res) => {
  try {
    const { technicianId } = req.params;
    const { page, limit } = req.query;

    const result = await RatingService.getTechnicianRatings(technicianId, { page, limit });

    res.json({
      success: true,
      data: result,
      pagination: result.pagination
    });
  } catch (error) {
    console.error('Get ratings error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get rating by ID controller
export const getRatingById = async (req, res) => {
  try {
    const { ratingId } = req.params;
    const rating = await RatingService.getRatingById(ratingId);

    res.json({
      success: true,
      data: rating
    });
  } catch (error) {
    console.error('Get rating error:', error);
    const statusCode = error.message === 'Rating not found' ? 404 : 500;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

// Update rating controller
export const updateRating = async (req, res) => {
  try {
    const { ratingId } = req.params;
    const updateData = req.body;

    const rating = await RatingService.updateRatingService(ratingId, updateData);

    res.json({
      success: true,
      message: 'Rating updated successfully',
      data: rating
    });
  } catch (error) {
    console.error('Update rating error:', error);
    const statusCode = error.message === 'Rating not found' ? 404 : 500;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};