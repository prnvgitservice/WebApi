import * as AdminSubscriptionService from '../services/adminSubscriptionService.js';

// Create subscription plan controller
export const createSubscriptionPlan = async (req, res) => {
  try {
    const planData = req.body;
    const adminId = req.user.id;
    
    const plan = await AdminSubscriptionService.createAdminSubscriptionPlanService(planData, adminId);

    res.status(201).json({
      success: true,
      message: 'Subscription plan created successfully',
      data: plan
    });
  } catch (error) {
    console.error('Create subscription plan error:', error);
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get all subscription plans controller
export const getAllSubscriptionPlans = async (req, res) => {
  try {
    const options = {
      active: req.query.active,
      popular: req.query.popular,
      sortBy: req.query.sortBy,
      sortOrder: req.query.sortOrder,
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search
    };

    const result = await AdminSubscriptionService.getAllAdminSubscriptionPlans(options);

    res.json({
      success: true,
      data: result.plans,
      pagination: result.pagination,
      summary: result.summary
    });
  } catch (error) {
    console.error('Get subscription plans error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get subscription plan by ID controller
export const getSubscriptionPlanById = async (req, res) => {
  try {
    const { planId } = req.params;
    const plan = await AdminSubscriptionService.getAdminSubscriptionPlanById(planId);

    res.json({
      success: true,
      data: plan
    });
  } catch (error) {
    console.error('Get subscription plan error:', error);
    const statusCode = error.message === 'Subscription plan not found' ? 404 : 500;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

// Update subscription plan controller
export const updateSubscriptionPlan = async (req, res) => {
  try {
    const { planId } = req.params;
    const updateData = req.body;
    const adminId = req.user.id;

    const plan = await AdminSubscriptionService.updateAdminSubscriptionPlanService(
      planId, 
      updateData, 
      adminId
    );

    res.json({
      success: true,
      message: 'Subscription plan updated successfully',
      data: plan
    });
  } catch (error) {
    console.error('Update subscription plan error:', error);
    const statusCode = error.message === 'Subscription plan not found' ? 404 : 400;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

// Delete subscription plan controller
export const deleteSubscriptionPlan = async (req, res) => {
  try {
    const { planId } = req.params;
    const adminId = req.user.id;
    
    const result = await AdminSubscriptionService.deleteAdminSubscriptionPlanService(planId, adminId);

    res.json({
      success: true,
      message: result.message,
      planId: result.planId
    });
  } catch (error) {
    console.error('Delete subscription plan error:', error);
    const statusCode = error.message === 'Subscription plan not found' ? 404 : 500;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

// Get plan statistics controller
export const getPlanStatistics = async (req, res) => {
  try {
    const statistics = await AdminSubscriptionService.getAdminPlanStatistics();

    res.json({
      success: true,
      data: statistics
    });
  } catch (error) {
    console.error('Get plan statistics error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Bulk update plans controller
export const bulkUpdatePlans = async (req, res) => {
  try {
    const { planIds, updateData } = req.body;
    const adminId = req.user.id;

    if (!planIds || !Array.isArray(planIds) || planIds.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Plan IDs array is required'
      });
    }

    const result = await AdminSubscriptionService.bulkUpdateAdminPlans(planIds, updateData, adminId);

    res.json({
      success: true,
      message: `Bulk update completed. ${result.success} plans updated, ${result.errors} errors.`,
      data: result
    });
  } catch (error) {
    console.error('Bulk update plans error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Toggle plan status controller
export const togglePlanStatus = async (req, res) => {
  try {
    const { planId } = req.params;
    const adminId = req.user.id;

    // Get current plan
    const currentPlan = await AdminSubscriptionService.getAdminSubscriptionPlanById(planId);
    
    // Toggle the isActive status
    const updateData = { isActive: !currentPlan.isActive };
    
    const plan = await AdminSubscriptionService.updateAdminSubscriptionPlanService(
      planId, 
      updateData, 
      adminId
    );

    res.json({
      success: true,
      message: `Plan ${plan.isActive ? 'activated' : 'deactivated'} successfully`,
      data: plan
    });
  } catch (error) {
    console.error('Toggle plan status error:', error);
    const statusCode = error.message === 'Subscription plan not found' ? 404 : 500;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

// Duplicate plan controller
export const duplicatePlan = async (req, res) => {
  try {
    const { planId } = req.params;
    const adminId = req.user.id;

    // Get the original plan
    const originalPlan = await AdminSubscriptionService.getAdminSubscriptionPlanById(planId);
    
    // Create new plan data with modified name
    const newPlanData = {
      ...originalPlan,
      name: `${originalPlan.name} (Copy)`,
      popular: false, // Reset popular status for duplicated plan
      isActive: false // Start as inactive
    };
    
    // Remove fields that shouldn't be copied
    delete newPlanData.id;
    delete newPlanData.createdAt;
    delete newPlanData.updatedAt;
    delete newPlanData.createdBy;
    delete newPlanData.updatedBy;

    const plan = await AdminSubscriptionService.createAdminSubscriptionPlanService(newPlanData, adminId);

    res.status(201).json({
      success: true,
      message: 'Plan duplicated successfully',
      data: plan
    });
  } catch (error) {
    console.error('Duplicate plan error:', error);
    const statusCode = error.message === 'Subscription plan not found' ? 404 : 400;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};