import * as SubscriptionService from '../services/subscriptionService.js';

// Subscription Plan Controllers
export const createSubscriptionPlan = async (req, res) => {
  try {
    const planData = req.body;
    const plan = await SubscriptionService.createSubscriptionPlanService(planData);

    res.status(201).json({
      success: true,
      message: 'Subscription plan created successfully',
      data: plan
    });
  } catch (error) {
    console.error('Create subscription plan error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getSubscriptionPlans = async (req, res) => {
  try {
    const { active } = req.query;
    const plans = await SubscriptionService.getSubscriptionPlans({ active });

    res.json({
      success: true,
      data: plans
    });
  } catch (error) {
    console.error('Get subscription plans error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getSubscriptionPlanById = async (req, res) => {
  try {
    const { planId } = req.params;
    const plan = await SubscriptionService.getSubscriptionPlanById(planId);

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

export const updateSubscriptionPlan = async (req, res) => {
  try {
    const { planId } = req.params;
    const updateData = req.body;

    const plan = await SubscriptionService.updateSubscriptionPlanService(planId, updateData);

    res.json({
      success: true,
      message: 'Subscription plan updated successfully',
      data: plan
    });
  } catch (error) {
    console.error('Update subscription plan error:', error);
    const statusCode = error.message === 'Subscription plan not found' ? 404 : 500;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

export const deleteSubscriptionPlan = async (req, res) => {
  try {
    const { planId } = req.params;
    const result = await SubscriptionService.deleteSubscriptionPlanService(planId);

    res.json({
      success: true,
      message: result.message
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

// User Subscription Controllers
export const createSubscription = async (req, res) => {
  try {
    const subscriptionData = req.body;
    const subscription = await SubscriptionService.createSubscriptionService(subscriptionData);

    res.status(201).json({
      success: true,
      message: 'Subscription created successfully',
      data: subscription
    });
  } catch (error) {
    console.error('Create subscription error:', error);
    const statusCode = error.message.includes('already has an active subscription') ? 400 : 500;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

export const getUserSubscriptions = async (req, res) => {
  try {
    const { technicianId } = req.params;
    const { status } = req.query;

    const subscriptions = await SubscriptionService.getUserSubscriptions(technicianId, { status });

    res.json({
      success: true,
      data: subscriptions
    });
  } catch (error) {
    console.error('Get user subscriptions error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getSubscriptionById = async (req, res) => {
  try {
    const { subscriptionId } = req.params;
    const subscription = await SubscriptionService.getSubscriptionById(subscriptionId);

    res.json({
      success: true,
      data: subscription
    });
  } catch (error) {
    console.error('Get subscription error:', error);
    const statusCode = error.message === 'Subscription not found' ? 404 : 500;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

export const updateSubscription = async (req, res) => {
  try {
    const { subscriptionId } = req.params;
    const updateData = req.body;

    const subscription = await SubscriptionService.updateSubscriptionService(subscriptionId, updateData);

    res.json({
      success: true,
      message: 'Subscription updated successfully',
      data: subscription
    });
  } catch (error) {
    console.error('Update subscription error:', error);
    const statusCode = error.message === 'Subscription not found' ? 404 : 500;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};