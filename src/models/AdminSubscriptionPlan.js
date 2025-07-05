import { v4 as uuidv4 } from 'uuid';

// Admin Subscription Plan model factory function
export const createAdminSubscriptionPlan = (data) => {
  return {
    id: data.id || uuidv4(),
    name: data.name,
    price: data.price,
    originalPrice: data.originalPrice || null,
    gst: data.gst,
    totalPrice: data.totalPrice || calculateTotalPrice(data.price, data.gst),
    validity: data.validity,
    validityUnit: data.validityUnit || 'days',
    icon: data.icon || 'Shield',
    color: data.color || 'from-gray-500 to-gray-600',
    buttonColor: data.buttonColor || 'bg-gray-600 hover:bg-gray-700',
    features: data.features || [],
    fullFeatures: data.fullFeatures || [],
    discount: data.discount || null,
    popular: data.popular || false,
    isActive: data.isActive !== undefined ? data.isActive : true,
    maxMembers: data.maxMembers || null,
    maxLeads: data.maxLeads || null,
    createdAt: data.createdAt || new Date().toISOString(),
    updatedAt: data.updatedAt || new Date().toISOString(),
    createdBy: data.createdBy || null,
    updatedBy: data.updatedBy || null
  };
};

// Calculate total price including GST
const calculateTotalPrice = (price, gst) => {
  const basePrice = parseFloat(price) || 0;
  const gstAmount = parseFloat(gst) || 0;
  return basePrice + gstAmount;
};

// Admin Subscription Plan validation function
export const validateAdminSubscriptionPlan = (data) => {
  const required = ['name', 'price', 'gst', 'validity'];
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

  if (parseFloat(data.gst) < 0) {
    throw new Error('GST cannot be negative');
  }

  if (data.validity && parseInt(data.validity) < 1) {
    throw new Error('Validity must be at least 1');
  }

  const validUnits = ['days', 'months', 'years'];
  if (data.validityUnit && !validUnits.includes(data.validityUnit)) {
    throw new Error(`Invalid validity unit. Must be one of: ${validUnits.join(', ')}`);
  }

  const validIcons = ['Shield', 'Zap', 'Star', 'Crown', 'Award', 'Target'];
  if (data.icon && !validIcons.includes(data.icon)) {
    throw new Error(`Invalid icon. Must be one of: ${validIcons.join(', ')}`);
  }

  if (data.features && !Array.isArray(data.features)) {
    throw new Error('Features must be an array');
  }

  if (data.fullFeatures && !Array.isArray(data.fullFeatures)) {
    throw new Error('Full features must be an array');
  }

  return true;
};

// Admin Subscription Plan update function
export const updateAdminSubscriptionPlan = (plan, data, updatedBy = null) => {
  const updatedPlan = { ...plan };
  
  if (data.name) updatedPlan.name = data.name;
  if (data.price !== undefined) updatedPlan.price = data.price;
  if (data.originalPrice !== undefined) updatedPlan.originalPrice = data.originalPrice;
  if (data.gst !== undefined) updatedPlan.gst = data.gst;
  if (data.validity !== undefined) updatedPlan.validity = data.validity;
  if (data.validityUnit) updatedPlan.validityUnit = data.validityUnit;
  if (data.icon) updatedPlan.icon = data.icon;
  if (data.color) updatedPlan.color = data.color;
  if (data.buttonColor) updatedPlan.buttonColor = data.buttonColor;
  if (data.features) updatedPlan.features = data.features;
  if (data.fullFeatures) updatedPlan.fullFeatures = data.fullFeatures;
  if (data.discount !== undefined) updatedPlan.discount = data.discount;
  if (data.popular !== undefined) updatedPlan.popular = data.popular;
  if (data.isActive !== undefined) updatedPlan.isActive = data.isActive;
  if (data.maxMembers !== undefined) updatedPlan.maxMembers = data.maxMembers;
  if (data.maxLeads !== undefined) updatedPlan.maxLeads = data.maxLeads;
  
  // Recalculate total price if price or GST changed
  if (data.price !== undefined || data.gst !== undefined) {
    updatedPlan.totalPrice = calculateTotalPrice(updatedPlan.price, updatedPlan.gst);
  }
  
  updatedPlan.updatedAt = new Date().toISOString();
  updatedPlan.updatedBy = updatedBy;
  
  return updatedPlan;
};

// Admin Subscription Plan serialization function
export const serializeAdminSubscriptionPlan = (plan) => {
  return {
    id: plan.id,
    name: plan.name,
    price: plan.price,
    originalPrice: plan.originalPrice,
    gst: plan.gst,
    totalPrice: plan.totalPrice,
    validity: plan.validity,
    validityUnit: plan.validityUnit,
    icon: plan.icon,
    color: plan.color,
    buttonColor: plan.buttonColor,
    features: plan.features,
    fullFeatures: plan.fullFeatures,
    discount: plan.discount,
    popular: plan.popular,
    isActive: plan.isActive,
    maxMembers: plan.maxMembers,
    maxLeads: plan.maxLeads,
    createdAt: plan.createdAt,
    updatedAt: plan.updatedAt,
    createdBy: plan.createdBy,
    updatedBy: plan.updatedBy
  };
};

// Feature validation helper
export const validateFeature = (feature) => {
  if (!feature.name || typeof feature.name !== 'string') {
    throw new Error('Feature name is required and must be a string');
  }
  
  if (typeof feature.included !== 'boolean') {
    throw new Error('Feature included status must be a boolean');
  }
  
  return true;
};

// Validate array of features
export const validateFeatures = (features) => {
  if (!Array.isArray(features)) {
    throw new Error('Features must be an array');
  }
  
  features.forEach((feature, index) => {
    try {
      validateFeature(feature);
    } catch (error) {
      throw new Error(`Feature at index ${index}: ${error.message}`);
    }
  });
  
  return true;
};