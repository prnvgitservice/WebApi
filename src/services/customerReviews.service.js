import Review from '../models/Review.js';

export const createReview = async ({ serviceId, userId, rating, comment }) => {
  const existing = await Review.findOne({ serviceId, userId });
  if (existing) {
    throw new Error('You have already reviewed this service.');
  }

  return await Review.create({ serviceId, userId, rating, comment });
};

export const updateReview = async (reviewId, userId, updates) => {
  const review = await Review.findOneAndUpdate(
    { _id: reviewId, userId },
    { $set: updates },
    { new: true }
  );
  if (!review) throw new Error('Review not found or unauthorized');
  return review;
};

export const deleteReview = async (reviewId, userId) => {
  const result = await Review.findOneAndDelete({ _id: reviewId, userId });
  if (!result) throw new Error('Review not found or unauthorized');
  return result;
};

export const getServiceReviews = async (serviceId) => {
  return await Review.find({ serviceId }).populate('userId', 'username').sort({ createdAt: -1 });
};

export const getAverageRating = async (serviceId) => {
  const result = await Review.aggregate([
    { $match: { serviceId: new mongoose.Types.ObjectId(serviceId) } },
    {
      $group: {
        _id: '$serviceId',
        averageRating: { $avg: '$rating' },
        totalReviews: { $sum: 1 }
      }
    }
  ]);
  return result[0] || { averageRating: 0, totalReviews: 0 };
};
