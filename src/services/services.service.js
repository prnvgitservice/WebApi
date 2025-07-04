import Service from '../models/services.model.js';
import Review from '../models/customerReviews.model.js';

/**
 * Create a new service for a technician
 */
export const createService = async (technicianId, serviceData) => {
  return await Service.create({ ...serviceData, technicianId });
};

/**
 * Get all services for a technician
 */
export const getServicesByTechnician = async (technicianId) => {
  return await Service.find({ technicianId });
};

/**
 * Get a single service by its ID
 */
export const getServiceById = async (serviceId) => {
  return await Service.findById(serviceId);
};

/**
 * Update a service by technician and service ID
 */
export const updateService = async (technicianId, serviceId, updates) => {
  return await Service.findOneAndUpdate(
    { _id: serviceId, technicianId },
    updates,
    { new: true }
  );
};

/**
 * Delete a service by technician and service ID
 */
export const deleteService = async (technicianId, serviceId) => {
  return await Service.findOneAndDelete({ _id: serviceId, technicianId });
};

/**
 * Get top-rated services using Review aggregation
 */
export const getTopRatedServices = async (limit = 10) => {
  return await Review.aggregate([
    {
      $group: {
        _id: '$serviceId',
        avgRating: { $avg: '$rating' },
        reviewCount: { $sum: 1 }
      }
    },
    { $sort: { avgRating: -1, reviewCount: -1 } },
    { $limit: limit },
    {
      $lookup: {
        from: 'services',
        localField: '_id',
        foreignField: '_id',
        as: 'service'
      }
    },
    { $unwind: '$service' },
    {
      $project: {
        _id: '$service._id',
        title: '$service.title',
        category: '$service.category',
        price: '$service.price',
        avgRating: 1,
        reviewCount: 1,
        technicianId: '$service.technicianId'
      }
    }
  ]);
};

/**
 * Get most popular services by booking count
 */
export const getMostPopularServices = async (limit = 10) => {
  return await Service.find({}).sort({ bookingCount: -1 }).limit(limit);
};



export const getServicesByCompanyId = async (companyId) => {
  return await Service.find({ businessProfileId: companyId });
};



export const getAllFilterOptions = async () => {
  const [categories, cities, priceRange, ratingRange] = await Promise.all([

    // Distinct service categories
    Service.distinct('category'),

    // Distinct cities from technician profiles
    TechnicianProfile.distinct('location.city'),

    // Min & max price from services
    Service.aggregate([
      {
        $group: {
          _id: null,
          min: { $min: '$price' },
          max: { $max: '$price' }
        }
      }
    ]),

    // Min & max rating from reviews (optional but useful)
    Review.aggregate([
      {
        $group: {
          _id: null,
          min: { $min: '$rating' },
          max: { $max: '$rating' }
        }
      }
    ])
  ]);

  return {
    categories,
    cities: cities.filter(Boolean), // remove nulls
    priceRange: priceRange[0] || { min: 0, max: 0 },
    ratingRange: ratingRange[0] || { min: 1, max: 5 }
  };
};