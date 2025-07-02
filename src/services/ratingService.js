import { createRating, validateRating, serializeRating } from '../models/Rating.js';

// In-memory storage (replace with database)
let ratings = [];

// Create rating service
export const createRatingService = async (ratingData) => {
  try {
    validateRating(ratingData);
    const rating = createRating(ratingData);
    ratings.push(rating);
    return serializeRating(rating);
  } catch (error) {
    throw new Error(`Failed to create rating: ${error.message}`);
  }
};

// Get technician ratings service
export const getTechnicianRatings = async (technicianId, options = {}) => {
  try {
    const { page = 1, limit = 10 } = options;

    const technicianRatings = ratings.filter(rating => rating.technicianId === technicianId);

    // Calculate average rating
    const averageRating = technicianRatings.length > 0 
      ? technicianRatings.reduce((sum, rating) => sum + rating.rating, 0) / technicianRatings.length
      : 0;

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedRatings = technicianRatings.slice(startIndex, endIndex);

    return {
      ratings: paginatedRatings.map(rating => serializeRating(rating)),
      averageRating: Math.round(averageRating * 10) / 10,
      totalRatings: technicianRatings.length,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(technicianRatings.length / limit),
        totalItems: technicianRatings.length,
        itemsPerPage: parseInt(limit)
      }
    };
  } catch (error) {
    throw new Error(`Failed to get technician ratings: ${error.message}`);
  }
};

// Get rating by ID service
export const getRatingById = async (ratingId) => {
  try {
    const rating = ratings.find(rating => rating.id === ratingId);
    if (!rating) {
      throw new Error('Rating not found');
    }
    return serializeRating(rating);
  } catch (error) {
    throw new Error(`Failed to get rating: ${error.message}`);
  }
};

// Update rating service
export const updateRatingService = async (ratingId, updateData) => {
  try {
    const ratingIndex = ratings.findIndex(rating => rating.id === ratingId);
    if (ratingIndex === -1) {
      throw new Error('Rating not found');
    }

    validateRating({ ...ratings[ratingIndex], ...updateData });
    
    const updatedRating = createRating({
      ...ratings[ratingIndex],
      ...updateData,
      updatedAt: new Date().toISOString()
    });

    ratings[ratingIndex] = updatedRating;
    return serializeRating(updatedRating);
  } catch (error) {
    throw new Error(`Failed to update rating: ${error.message}`);
  }
};