import { useState, useEffect } from 'react';
import ApiClient from '../../server/utils/apiClient.js';

// Custom hook for API calls with loading and error states
export const useApi = (apiCall, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiCall();
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error, refetch: () => fetchData() };
};

// Hook for subscription plans
export const useSubscriptionPlans = () => {
  return useApi(() => ApiClient.getSubscriptionPlans());
};

// Hook for technician ratings
export const useTechnicianRatings = (technicianId) => {
  return useApi(() => ApiClient.getTechnicianRatings(technicianId), [technicianId]);
};

// Hook for FAQs
export const useFAQs = (params = {}) => {
  return useApi(() => ApiClient.getFAQs(params), [JSON.stringify(params)]);
};

// Hook for user subscriptions
export const useUserSubscriptions = (technicianId) => {
  return useApi(() => ApiClient.getUserSubscriptions(technicianId), [technicianId]);
};