import { v4 as uuidv4 } from 'uuid';

// Subscription model factory function
export const createSubscription = (data) => {
  return {
    technicianId: data.technicianId,
    planId: data.planId,
    planName: data.planName,
    amount: parseFloat(data.amount),
    paymentMethod: data.paymentMethod || 'online',
    status: data.status || 'active',
    startDate: data.startDate || new Date().toISOString(),
    endDate: data.endDate,
    leadsUsed: data.leadsUsed || 0,
    maxLeads: data.maxLeads || null,
    createdAt: data.createdAt || new Date().toISOString(),
    updatedAt: data.updatedAt || new Date().toISOString()
  };
};

// Subscription validation function
export const validateSubscription = (data) => {
  const required = ['technicianId', 'planId'];
  const missing = required.filter(field => !data[field]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }

  const validPaymentMethods = ['online', 'cash', 'bank_transfer'];
  if (data.paymentMethod && !validPaymentMethods.includes(data.paymentMethod)) {
    throw new Error(`Invalid payment method. Must be one of: ${validPaymentMethods.join(', ')}`);
  }

  const validStatuses = ['active', 'expired', 'cancelled', 'pending'];
  if (data.status && !validStatuses.includes(data.status)) {
    throw new Error(`Invalid status. Must be one of: ${validStatuses.join(', ')}`);
  }

  return true;
};

// Subscription update function
export const updateSubscription = (subscription, data) => {
  const updatedSubscription = { ...subscription };
  if (data.status) updatedSubscription.status = data.status;
  if (data.leadsUsed !== undefined) updatedSubscription.leadsUsed = parseInt(data.leadsUsed);
  if (data.endDate) updatedSubscription.endDate = data.endDate;
  updatedSubscription.updatedAt = new Date().toISOString();
  return updatedSubscription;
};

// Subscription utility functions
export const isExpired = (subscription) => {
  return new Date() > new Date(subscription.endDate);
};

export const getRemainingLeads = (subscription) => {
  if (!subscription.maxLeads) return null;
  return Math.max(0, subscription.maxLeads - subscription.leadsUsed);
};

// Subscription serialization function
export const serializeSubscription = (subscription) => {
  return {
    id: subscription.id,
    technicianId: subscription.technicianId,
    planId: subscription.planId,
    planName: subscription.planName,
    amount: subscription.amount,
    paymentMethod: subscription.paymentMethod,
    status: subscription.status,
    startDate: subscription.startDate,
    endDate: subscription.endDate,
    leadsUsed: subscription.leadsUsed,
    maxLeads: subscription.maxLeads,
    remainingLeads: getRemainingLeads(subscription),
    isExpired: isExpired(subscription),
    createdAt: subscription.createdAt,
    updatedAt: subscription.updatedAt
  };
};