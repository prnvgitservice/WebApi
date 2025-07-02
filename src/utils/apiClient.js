const API_BASE_URL = 'http://localhost:5000/api';

// API Client utility functions
export const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }

    return data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

// Photo API functions
export const uploadPhotos = async (formData) => {
  return apiRequest('/photos', {
    method: 'POST',
    body: formData,
    headers: {}, // Let browser set Content-Type for FormData
  });
};

export const getPhotosByCompany = async (companyId, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return apiRequest(`/photos/company/${companyId}?${queryString}`);
};

export const getPhotoById = async (photoId) => {
  return apiRequest(`/photos/${photoId}`);
};

export const deletePhoto = async (photoId) => {
  return apiRequest(`/photos/${photoId}`, { method: 'DELETE' });
};

// Rating API functions
export const createRating = async (ratingData) => {
  return apiRequest('/ratings', {
    method: 'POST',
    body: JSON.stringify(ratingData),
  });
};

export const getTechnicianRatings = async (technicianId, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return apiRequest(`/ratings/technician/${technicianId}?${queryString}`);
};

export const getRatingById = async (ratingId) => {
  return apiRequest(`/ratings/${ratingId}`);
};

export const updateRating = async (ratingId, updateData) => {
  return apiRequest(`/ratings/${ratingId}`, {
    method: 'PUT',
    body: JSON.stringify(updateData),
  });
};

// FAQ API functions
export const createFAQ = async (faqData) => {
  return apiRequest('/faq', {
    method: 'POST',
    body: JSON.stringify(faqData),
  });
};

export const getFAQs = async (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return apiRequest(`/faq?${queryString}`);
};

export const getFAQById = async (faqId) => {
  return apiRequest(`/faq/${faqId}`);
};

export const updateFAQ = async (faqId, updateData) => {
  return apiRequest(`/faq/${faqId}`, {
    method: 'PUT',
    body: JSON.stringify(updateData),
  });
};

export const deleteFAQ = async (faqId) => {
  return apiRequest(`/faq/${faqId}`, { method: 'DELETE' });
};

// Subscription Plan API functions
export const createSubscriptionPlan = async (planData) => {
  return apiRequest('/subscriptions/plans', {
    method: 'POST',
    body: JSON.stringify(planData),
  });
};

export const getSubscriptionPlans = async (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return apiRequest(`/subscriptions/plans?${queryString}`);
};

export const getSubscriptionPlanById = async (planId) => {
  return apiRequest(`/subscriptions/plans/${planId}`);
};

export const updateSubscriptionPlan = async (planId, updateData) => {
  return apiRequest(`/subscriptions/plans/${planId}`, {
    method: 'PUT',
    body: JSON.stringify(updateData),
  });
};

export const deleteSubscriptionPlan = async (planId) => {
  return apiRequest(`/subscriptions/plans/${planId}`, { method: 'DELETE' });
};

// User Subscription API functions
export const subscribeToplan = async (subscriptionData) => {
  return apiRequest('/subscriptions', {
    method: 'POST',
    body: JSON.stringify(subscriptionData),
  });
};

export const getUserSubscriptions = async (technicianId, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return apiRequest(`/subscriptions/user/${technicianId}?${queryString}`);
};

export const getSubscriptionById = async (subscriptionId) => {
  return apiRequest(`/subscriptions/${subscriptionId}`);
};

export const updateSubscription = async (subscriptionId, updateData) => {
  return apiRequest(`/subscriptions/${subscriptionId}`, {
    method: 'PUT',
    body: JSON.stringify(updateData),
  });
};

export default {
  uploadPhotos,
  getPhotosByCompany,
  getPhotoById,
  deletePhoto,
  createRating,
  getTechnicianRatings,
  getRatingById,
  updateRating,
  createFAQ,
  getFAQs,
  getFAQById,
  updateFAQ,
  deleteFAQ,
  createSubscriptionPlan,
  getSubscriptionPlans,
  getSubscriptionPlanById,
  updateSubscriptionPlan,
  deleteSubscriptionPlan,
  subscribeToplan,
  getUserSubscriptions,
  getSubscriptionById,
  updateSubscription,
};