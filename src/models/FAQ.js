import { v4 as uuidv4 } from 'uuid';

// FAQ model factory function
export const createFAQ = (data) => {
  return {
    id: data.id || uuidv4(),
    question: data.question,
    answer: data.answer,
    category: data.category || 'general',
    isActive: data.isActive !== undefined ? data.isActive : true,
    createdAt: data.createdAt || new Date().toISOString(),
    updatedAt: data.updatedAt || new Date().toISOString()
  };
};

// FAQ validation function
export const validateFAQ = (data) => {
  const required = ['question', 'answer'];
  const missing = required.filter(field => !data[field]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }

  if (data.question.length < 10 || data.question.length > 500) {
    throw new Error('Question must be between 10 and 500 characters');
  }

  if (data.answer.length < 10 || data.answer.length > 2000) {
    throw new Error('Answer must be between 10 and 2000 characters');
  }

  const validCategories = ['registration', 'subscription', 'features', 'payment', 'support', 'general'];
  if (data.category && !validCategories.includes(data.category)) {
    throw new Error(`Invalid category. Must be one of: ${validCategories.join(', ')}`);
  }

  return true;
};

// FAQ update function
export const updateFAQ = (faq, data) => {
  const updatedFAQ = { ...faq };
  if (data.question) updatedFAQ.question = data.question;
  if (data.answer) updatedFAQ.answer = data.answer;
  if (data.category) updatedFAQ.category = data.category;
  if (data.isActive !== undefined) updatedFAQ.isActive = data.isActive;
  updatedFAQ.updatedAt = new Date().toISOString();
  return updatedFAQ;
};

// FAQ serialization function
export const serializeFAQ = (faq) => {
  return {
    id: faq.id,
    question: faq.question,
    answer: faq.answer,
    category: faq.category,
    isActive: faq.isActive,
    createdAt: faq.createdAt,
    updatedAt: faq.updatedAt
  };
};