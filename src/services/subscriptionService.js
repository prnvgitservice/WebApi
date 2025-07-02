import { 
  createSubscriptionPlan, 
  validateSubscriptionPlan, 
  updateSubscriptionPlan, 
  serializeSubscriptionPlan 
} from '../models/SubscriptionPlan.js';
import { 
  createSubscription, 
  validateSubscription, 
  updateSubscription, 
  serializeSubscription 
} from '../models/Subscription.js';

// In-memory storage (replace with database)
let subscriptionPlans = [
  createSubscriptionPlan({
    id: 'free-plan',
    name: 'Free Plan',
    price: 0,
    gst: 0,
    totalPrice: 0,
    validity: 60,
    validityUnit: 'days',
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
    ]
  }),
  createSubscriptionPlan({
    id: 'economy-plan',
    name: 'Economy Plan',
    price: 1000,
    originalPrice: 2000,
    discount: 50,
    gst: 180,
    totalPrice: 1180,
    validity: 30,
    validityUnit: 'days',
    maxMembers: 5,
    features: [
      { name: 'Only 5 members per pincode per plan', included: true },
      { name: 'No Commission From Technicians Or Customers', included: false },
      { name: 'Work Images: Up to 10 (minimum 3)', included: true },
      { name: 'Work Videos: Up to 3', included: true },
      { name: 'Social Media Promotion', included: true },
      { name: 'No Refund', included: false },
      { name: 'No Change Of Plan', included: false },
      { name: 'Billing Facility', included: true }
    ]
  }),
  createSubscriptionPlan({
    id: 'gold-plan',
    name: 'Gold Plan',
    price: 3000,
    originalPrice: 6000,
    discount: 50,
    gst: 540,
    totalPrice: 3540,
    validity: 30,
    validityUnit: 'days',
    maxMembers: 5,
    maxLeads: 100,
    isPopular: true,
    features: [
      { name: 'Only 5 members per pincode per plan', included: true },
      { name: 'No Commission From Technicians Or Customers', included: false },
      { name: 'Work Images: Up to 10 (minimum 3)', included: true },
      { name: 'Work Videos: Up to 3', included: true },
      { name: 'Social Media Promotion', included: true },
      { name: 'No Refund', included: false },
      { name: 'No Change Of Plan', included: false },
      { name: 'Billing Facility', included: true }
    ]
  }),
  createSubscriptionPlan({
    id: 'platinum-plan',
    name: 'Platinum Plan',
    price: 10000,
    originalPrice: 15000,
    discount: 33.33,
    gst: 1800,
    totalPrice: 11800,
    validity: 30,
    validityUnit: 'days',
    maxMembers: 5,
    maxLeads: 100,
    features: [
      { name: 'Only 5 members per pincode per plan', included: true },
      { name: 'No Commission From Technicians Or Customers', included: false },
      { name: 'Work Images: Up to 10 (minimum 3)', included: true },
      { name: 'Work Videos: Up to 3', included: true },
      { name: 'Social Media Promotion', included: true },
      { name: 'No Refund', included: false },
      { name: 'No Change Of Plan', included: false },
      { name: 'Billing Facility', included: true }
    ]
  })
];

let userSubscriptions = [];

// Subscription Plan services
export const createSubscriptionPlanService = async (planData) => {
  try {
    validateSubscriptionPlan(planData);
    const plan = createSubscriptionPlan(planData);
    subscriptionPlans.push(plan);
    return serializeSubscriptionPlan(plan);
  } catch (error) {
    throw new Error(`Failed to create subscription plan: ${error.message}`);
  }
};

export const getSubscriptionPlans = async (options = {}) => {
  try {
    const { active = true } = options;

    let filteredPlans = subscriptionPlans;

    if (active === 'true' || active === true) {
      filteredPlans = subscriptionPlans.filter(plan => plan.isActive);
    }

    // Sort plans by price
    filteredPlans.sort((a, b) => a.totalPrice - b.totalPrice);

    return filteredPlans.map(plan => serializeSubscriptionPlan(plan));
  } catch (error) {
    throw new Error(`Failed to get subscription plans: ${error.message}`);
  }
};

export const getSubscriptionPlanById = async (planId) => {
  try {
    const plan = subscriptionPlans.find(plan => plan.id === planId && plan.isActive);
    if (!plan) {
      throw new Error('Subscription plan not found');
    }
    return serializeSubscriptionPlan(plan);
  } catch (error) {
    throw new Error(`Failed to get subscription plan: ${error.message}`);
  }
};

export const updateSubscriptionPlanService = async (planId, updateData) => {
  try {
    const planIndex = subscriptionPlans.findIndex(plan => plan.id === planId);
    if (planIndex === -1) {
      throw new Error('Subscription plan not found');
    }

    validateSubscriptionPlan({ ...subscriptionPlans[planIndex], ...updateData });
    subscriptionPlans[planIndex] = updateSubscriptionPlan(subscriptionPlans[planIndex], updateData);
    return serializeSubscriptionPlan(subscriptionPlans[planIndex]);
  } catch (error) {
    throw new Error(`Failed to update subscription plan: ${error.message}`);
  }
};

export const deleteSubscriptionPlanService = async (planId) => {
  try {
    const planIndex = subscriptionPlans.findIndex(plan => plan.id === planId);
    if (planIndex === -1) {
      throw new Error('Subscription plan not found');
    }

    subscriptionPlans[planIndex].isActive = false;
    subscriptionPlans[planIndex].updatedAt = new Date().toISOString();
    return { message: 'Subscription plan deleted successfully' };
  } catch (error) {
    throw new Error(`Failed to delete subscription plan: ${error.message}`);
  }
};

// User Subscription services
export const createSubscriptionService = async (subscriptionData) => {
  try {
    validateSubscription(subscriptionData);

    // Check if plan exists
    const plan = subscriptionPlans.find(p => p.id === subscriptionData.planId && p.isActive);
    if (!plan) {
      throw new Error('Subscription plan not found');
    }

    // Check if user already has an active subscription
    const existingSubscription = userSubscriptions.find(
      sub => sub.technicianId === subscriptionData.technicianId && sub.status === 'active'
    );

    if (existingSubscription) {
      throw new Error('User already has an active subscription');
    }

    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + plan.validity);

    const subscription = createSubscription({
      ...subscriptionData,
      planName: plan.name,
      amount: plan.totalPrice,
      endDate: endDate.toISOString(),
      maxLeads: plan.maxLeads
    });

    userSubscriptions.push(subscription);
    return serializeSubscription(subscription);
  } catch (error) {
    throw new Error(`Failed to create subscription: ${error.message}`);
  }
};

export const getUserSubscriptions = async (technicianId, options = {}) => {
  try {
    const { status } = options;

    let userSubs = userSubscriptions.filter(sub => sub.technicianId === technicianId);

    if (status) {
      userSubs = userSubs.filter(sub => sub.status === status);
    }

    // Sort by creation date (newest first)
    userSubs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return userSubs.map(sub => serializeSubscription(sub));
  } catch (error) {
    throw new Error(`Failed to get user subscriptions: ${error.message}`);
  }
};

export const getSubscriptionById = async (subscriptionId) => {
  try {
    const subscription = userSubscriptions.find(sub => sub.id === subscriptionId);
    if (!subscription) {
      throw new Error('Subscription not found');
    }
    return serializeSubscription(subscription);
  } catch (error) {
    throw new Error(`Failed to get subscription: ${error.message}`);
  }
};

export const updateSubscriptionService = async (subscriptionId, updateData) => {
  try {
    const subscriptionIndex = userSubscriptions.findIndex(sub => sub.id === subscriptionId);
    if (subscriptionIndex === -1) {
      throw new Error('Subscription not found');
    }

    userSubscriptions[subscriptionIndex] = updateSubscription(userSubscriptions[subscriptionIndex], updateData);
    return serializeSubscription(userSubscriptions[subscriptionIndex]);
  } catch (error) {
    throw new Error(`Failed to update subscription: ${error.message}`);
  }
};