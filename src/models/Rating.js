import { v4 as uuidv4 } from 'uuid';

// Rating model factory function
export const createRating = (data) => {
  return {
    id: data.id || uuidv4(),
    technicianId: data.technicianId,
    customerId: data.customerId,
    rating: parseFloat(data.rating),
    review: data.review || '',
    serviceType: data.serviceType || '',
    createdAt: data.createdAt || new Date().toISOString(),
    updatedAt: data.updatedAt || new Date().toISOString()
  };
};

// Rating validation function
export const validateRating = (data) => {
  const required = ['technicianId', 'customerId', 'rating'];
  const missing = required.filter(field => !data[field]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }

  const rating = parseFloat(data.rating);
  if (isNaN(rating) || rating < 1 || rating > 5) {
    throw new Error('Rating must be a number between 1 and 5');
  }

  if (data.review && data.review.length > 1000) {
    throw new Error('Review cannot exceed 1000 characters');
  }

  return true;
};

// Rating serialization function
export const serializeRating = (rating) => {
  return {
    id: rating.id,
    technicianId: rating.technicianId,
    customerId: rating.customerId,
    rating: rating.rating,
    review: rating.review,
    serviceType: rating.serviceType,
    createdAt: rating.createdAt,
    updatedAt: rating.updatedAt
  };
};