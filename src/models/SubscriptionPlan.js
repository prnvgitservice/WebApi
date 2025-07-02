import { v4 as uuidv4 } from 'uuid';

// SubscriptionPlan model factory function
export const createSubscriptionPlan = (data) => {
  return {
    id: data.id || uuidv4(),
    name: data.name,
    price: parseFloat(data.price),
    originalPrice: data.originalPrice ? parseFloat(data.originalPrice) : null,
    discount: data.discount ? parseFloat(data.discount) : null,
    gst: parseFloat(data.gst),
    totalPrice: parseFloat(data.totalPrice),
    validity: parseInt(data.validity),
    validityUnit: data.validityUnit || 'days',
    maxMembers: data.maxMembers ? parseInt(data.maxMembers) : null,
    maxLeads: data.maxLeads ? parseInt(data.maxLeads) : null,
    features: data.features || [],
    isPopular: data.isPopular || false,
    isActive: data.isActive !== undefined ? data.isActive : true,
    createdAt: data.createdAt || new Date().toISOString(),
    updatedAt: data.updatedAt || new Date().toISOString()
  };
};

// SubscriptionPlan validation function
export const validateSubscriptionPlan = (data) => {
  const required = ['name', 'price', 'gst', 'totalPrice', 'validity', 'features'];
  const missing = required.filter(field => !data[field]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }

  if (data.name.length < 3 || data.name.length > 100) {
    throw new Error('Plan name must be between 3 and 100 characters');
  }

  if (parseFloat(data.price) < 0) {
    throw new Error('Price cannot be negative');
  }

  if (parseInt(data.validity) < 1) {
    throw new Error('Validity must be at least 1');
  }

  const validUnits = ['days', 'months', 'years'];
  if (data.validityUnit && !validUnits.includes(data.validityUnit)) {
    throw new Error(`Invalid validity unit. Must be one of: ${validUnits.join(', ')}`);
  }

  if (!Array.isArray(data.features)) {
    throw new Error('Features must be an array');
  }

  return true;
};

// SubscriptionPlan update function
export const updateSubscriptionPlan = (plan, data) => {
  const updatedPlan = { ...plan };
  if (data.name) updatedPlan.name = data.name;
  if (data.price !== undefined) updatedPlan.price = parseFloat(data.price);
  if (data.originalPrice !== undefined) updatedPlan.originalPrice = data.originalPrice ? parseFloat(data.originalPrice) : null;
  if (data.discount !== undefined) updatedPlan.discount = data.discount ? parseFloat(data.discount) : null;
  if (data.gst !== undefined) updatedPlan.gst = parseFloat(data.gst);
  if (data.totalPrice !== undefined) updatedPlan.totalPrice = parseFloat(data.totalPrice);
  if (data.validity !== undefined) updatedPlan.validity = parseInt(data.validity);
  if (data.validityUnit) updatedPlan.validityUnit = data.validityUnit;
  if (data.maxMembers !== undefined) updatedPlan.maxMembers = data.maxMembers ? parseInt(data.maxMembers) : null;
  if (data.maxLeads !== undefined) updatedPlan.maxLeads = data.maxLeads ? parseInt(data.maxLeads) : null;
  if (data.features) updatedPlan.features = data.features;
  if (data.isPopular !== undefined) updatedPlan.isPopular = data.isPopular;
  if (data.isActive !== undefined) updatedPlan.isActive = data.isActive;
  updatedPlan.updatedAt = new Date().toISOString();
  return updatedPlan;
};

// SubscriptionPlan serialization function
export const serializeSubscriptionPlan = (plan) => {
  return {
    id: plan.id,
    name: plan.name,
    price: plan.price,
    originalPrice: plan.originalPrice,
    discount: plan.discount,
    gst: plan.gst,
    totalPrice: plan.totalPrice,
    validity: plan.validity,
    validityUnit: plan.validityUnit,
    maxMembers: plan.maxMembers,
    maxLeads: plan.maxLeads,
    features: plan.features,
    isPopular: plan.isPopular,
    isActive: plan.isActive,
    createdAt: plan.createdAt,
    updatedAt: plan.updatedAt
  };
};