import { 
  createAdminSubscriptionPlan, 
  validateAdminSubscriptionPlan, 
  updateAdminSubscriptionPlan, 
  serializeAdminSubscriptionPlan,
  validateFeatures
} from '../models/AdminSubscriptionPlan.js';

// In-memory storage (replace with database in production)
let adminSubscriptionPlans = [
  createAdminSubscriptionPlan({
    id: 'admin-free-plan',
    name: 'Free Plan',
    price: '0',
    gst: '0',
    validity: '60',
    validityUnit: 'days',
    icon: 'Shield',
    color: 'from-gray-500 to-gray-600',
    buttonColor: 'bg-gray-600 hover:bg-gray-700',
    maxMembers: 5,
    features: [
      { name: '5 members per pincode per plan', included: true },
      { name: 'No Commission From Technicians Or Customers', included: false },
      { name: 'First time users only', included: true },
      { name: 'Work Images: Up to 10 (minimum 3)', included: true },
      { name: 'Work Videos: Up to 3', included: true },
      { name: 'Social Media Promotion', included: true },
      { name: 'No Refund', included: false },
      { name: 'No Change Of Plan', included: false },
      { name: 'Billing Facility', included: true }
    ],
    fullFeatures: [
      { name: '5 members per pincode per plan', included: true },
      { name: 'No Commission From Technicians Or Customers', included: false },
      { name: 'First time users only', included: true },
      { name: 'Work Images: Up to 10 (minimum 3)', included: true },
      { name: 'Work Videos: Up to 3', included: true },
      { name: 'Social Media Promotion', included: true },
      { name: 'No Refund', included: false },
      { name: 'No Change Of Plan', included: false },
      { name: 'Billing Facility', included: true },
      { name: 'Customer Support', included: true },
      { name: 'Mobile App Access', included: true }
    ],
    createdBy: 'system'
  }),
  createAdminSubscriptionPlan({
    id: 'admin-gold-plan',
    name: 'Gold Plan',
    price: '3000',
    originalPrice: '6000',
    gst: '540',
    validity: '30',
    validityUnit: 'days',
    icon: 'Star',
    color: 'from-yellow-500 to-yellow-600',
    buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
    discount: '50',
    popular: true,
    maxMembers: 5,
    maxLeads: 100,
    features: [
      { name: 'Only 5 members per pincode per plan', included: true },
      { name: 'No Commission From Technicians Or Customers', included: false },
      { name: 'Work Images: Up to 10 (minimum 3)', included: true },
      { name: 'Work Videos: Up to 3', included: true },
      { name: 'Social Media Promotion', included: true },
      { name: 'Priority Support', included: true },
      { name: 'Advanced Analytics', included: true },
      { name: 'Billing Facility', included: true }
    ],
    fullFeatures: [
      { name: 'Only 5 members per pincode per plan', included: true },
      { name: 'No Commission From Technicians Or Customers', included: false },
      { name: 'Work Images: Up to 10 (minimum 3)', included: true },
      { name: 'Work Videos: Up to 3', included: true },
      { name: 'Social Media Promotion', included: true },
      { name: 'Priority Support', included: true },
      { name: 'Advanced Analytics', included: true },
      { name: 'Billing Facility', included: true },
      { name: 'Lead Management System', included: true },
      { name: 'Custom Branding', included: true },
      { name: 'API Access', included: true }
    ],
    createdBy: 'admin'
  })
];

// Create subscription plan service
export const createAdminSubscriptionPlanService = async (planData, adminId) => {
  try {
    validateAdminSubscriptionPlan(planData);
    
    if (planData.features) {
      validateFeatures(planData.features);
    }
    
    if (planData.fullFeatures) {
      validateFeatures(planData.fullFeatures);
    }

    // Check if plan name already exists
    const existingPlan = adminSubscriptionPlans.find(
      plan => plan.name.toLowerCase() === planData.name.toLowerCase() && plan.isActive
    );
    
    if (existingPlan) {
      throw new Error('A plan with this name already exists');
    }

    const plan = createAdminSubscriptionPlan({
      ...planData,
      createdBy: adminId
    });
    
    adminSubscriptionPlans.push(plan);
    return serializeAdminSubscriptionPlan(plan);
  } catch (error) {
    throw new Error(`Failed to create subscription plan: ${error.message}`);
  }
};

// Get all subscription plans service
export const getAllAdminSubscriptionPlans = async (options = {}) => {
  try {
    const { 
      active, 
      popular, 
      sortBy = 'createdAt', 
      sortOrder = 'desc',
      page = 1,
      limit = 10,
      search
    } = options;

    let filteredPlans = [...adminSubscriptionPlans];

    // Filter by active status
    if (active !== undefined) {
      const isActive = active === 'true' || active === true;
      filteredPlans = filteredPlans.filter(plan => plan.isActive === isActive);
    }

    // Filter by popular status
    if (popular !== undefined) {
      const isPopular = popular === 'true' || popular === true;
      filteredPlans = filteredPlans.filter(plan => plan.popular === isPopular);
    }

    // Search functionality
    if (search) {
      const searchTerm = search.toLowerCase();
      filteredPlans = filteredPlans.filter(plan => 
        plan.name.toLowerCase().includes(searchTerm) ||
        plan.features.some(feature => 
          feature.name.toLowerCase().includes(searchTerm)
        )
      );
    }

    // Sorting
    filteredPlans.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (sortBy === 'price' || sortBy === 'totalPrice') {
        aValue = parseFloat(aValue) || 0;
        bValue = parseFloat(bValue) || 0;
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedPlans = filteredPlans.slice(startIndex, endIndex);

    return {
      plans: paginatedPlans.map(plan => serializeAdminSubscriptionPlan(plan)),
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(filteredPlans.length / limit),
        totalItems: filteredPlans.length,
        itemsPerPage: parseInt(limit)
      },
      summary: {
        totalPlans: adminSubscriptionPlans.length,
        activePlans: adminSubscriptionPlans.filter(p => p.isActive).length,
        popularPlans: adminSubscriptionPlans.filter(p => p.popular).length
      }
    };
  } catch (error) {
    throw new Error(`Failed to get subscription plans: ${error.message}`);
  }
};

// Get subscription plan by ID service
export const getAdminSubscriptionPlanById = async (planId) => {
  try {
    const plan = adminSubscriptionPlans.find(plan => plan.id === planId);
    if (!plan) {
      throw new Error('Subscription plan not found');
    }
    return serializeAdminSubscriptionPlan(plan);
  } catch (error) {
    throw new Error(`Failed to get subscription plan: ${error.message}`);
  }
};

// Update subscription plan service
export const updateAdminSubscriptionPlanService = async (planId, updateData, adminId) => {
  try {
    const planIndex = adminSubscriptionPlans.findIndex(plan => plan.id === planId);
    if (planIndex === -1) {
      throw new Error('Subscription plan not found');
    }

    // Validate update data
    const currentPlan = adminSubscriptionPlans[planIndex];
    const mergedData = { ...currentPlan, ...updateData };
    validateAdminSubscriptionPlan(mergedData);
    
    if (updateData.features) {
      validateFeatures(updateData.features);
    }
    
    if (updateData.fullFeatures) {
      validateFeatures(updateData.fullFeatures);
    }

    // Check if new name conflicts with existing plans
    if (updateData.name && updateData.name !== currentPlan.name) {
      const existingPlan = adminSubscriptionPlans.find(
        plan => plan.name.toLowerCase() === updateData.name.toLowerCase() && 
                plan.isActive && 
                plan.id !== planId
      );
      
      if (existingPlan) {
        throw new Error('A plan with this name already exists');
      }
    }

    adminSubscriptionPlans[planIndex] = updateAdminSubscriptionPlan(
      currentPlan, 
      updateData, 
      adminId
    );
    
    return serializeAdminSubscriptionPlan(adminSubscriptionPlans[planIndex]);
  } catch (error) {
    throw new Error(`Failed to update subscription plan: ${error.message}`);
  }
};

// Delete subscription plan service (soft delete)
export const deleteAdminSubscriptionPlanService = async (planId, adminId) => {
  try {
    const planIndex = adminSubscriptionPlans.findIndex(plan => plan.id === planId);
    if (planIndex === -1) {
      throw new Error('Subscription plan not found');
    }

    // Check if plan has active subscriptions (in real app, check database)
    // For demo, we'll just soft delete
    adminSubscriptionPlans[planIndex].isActive = false;
    adminSubscriptionPlans[planIndex].updatedAt = new Date().toISOString();
    adminSubscriptionPlans[planIndex].updatedBy = adminId;
    
    return { 
      message: 'Subscription plan deleted successfully',
      planId: planId
    };
  } catch (error) {
    throw new Error(`Failed to delete subscription plan: ${error.message}`);
  }
};

// Get plan statistics
export const getAdminPlanStatistics = async () => {
  try {
    const totalPlans = adminSubscriptionPlans.length;
    const activePlans = adminSubscriptionPlans.filter(p => p.isActive).length;
    const popularPlans = adminSubscriptionPlans.filter(p => p.popular && p.isActive).length;
    const freePlans = adminSubscriptionPlans.filter(p => parseFloat(p.price) === 0 && p.isActive).length;
    
    const priceRanges = {
      free: adminSubscriptionPlans.filter(p => parseFloat(p.price) === 0 && p.isActive).length,
      budget: adminSubscriptionPlans.filter(p => parseFloat(p.price) > 0 && parseFloat(p.price) <= 2000 && p.isActive).length,
      premium: adminSubscriptionPlans.filter(p => parseFloat(p.price) > 2000 && parseFloat(p.price) <= 5000 && p.isActive).length,
      enterprise: adminSubscriptionPlans.filter(p => parseFloat(p.price) > 5000 && p.isActive).length
    };

    return {
      totalPlans,
      activePlans,
      popularPlans,
      freePlans,
      priceRanges,
      averagePrice: activePlans > 0 ? 
        adminSubscriptionPlans
          .filter(p => p.isActive)
          .reduce((sum, p) => sum + parseFloat(p.price), 0) / activePlans : 0
    };
  } catch (error) {
    throw new Error(`Failed to get plan statistics: ${error.message}`);
  }
};

// Bulk operations
export const bulkUpdateAdminPlans = async (planIds, updateData, adminId) => {
  try {
    const updatedPlans = [];
    const errors = [];

    for (const planId of planIds) {
      try {
        const updatedPlan = await updateAdminSubscriptionPlanService(planId, updateData, adminId);
        updatedPlans.push(updatedPlan);
      } catch (error) {
        errors.push({ planId, error: error.message });
      }
    }

    return {
      success: updatedPlans.length,
      errors: errors.length,
      updatedPlans,
      errorDetails: errors
    };
  } catch (error) {
    throw new Error(`Failed to bulk update plans: ${error.message}`);
  }
};