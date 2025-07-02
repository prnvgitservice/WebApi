import { createFAQ, validateFAQ, updateFAQ, serializeFAQ } from '../models/FAQ.js';

// In-memory storage (replace with database)
let faqs = [
  createFAQ({
    question: 'How do I become a technician on PRNV Services?',
    answer: 'To become a technician, sign up on our platform, complete your profile with skills and certifications, choose a subscription plan, and start receiving service requests.',
    category: 'registration'
  }),
  createFAQ({
    question: 'What subscription plans are available?',
    answer: 'We offer Free, Economy, Gold, and Platinum plans with different features and pricing. Each plan provides access to customer leads and platform tools.',
    category: 'subscription'
  }),
  createFAQ({
    question: 'How do I upload work photos?',
    answer: 'You can upload up to 10 work photos through your dashboard. Photos help customers see your work quality and increase your chances of getting hired.',
    category: 'features'
  })
];

// Create FAQ service
export const createFAQService = async (faqData) => {
  try {
    validateFAQ(faqData);
    const faq = createFAQ(faqData);
    faqs.push(faq);
    return serializeFAQ(faq);
  } catch (error) {
    throw new Error(`Failed to create FAQ: ${error.message}`);
  }
};

// Get FAQs service
export const getFAQs = async (options = {}) => {
  try {
    const { category, search, page = 1, limit = 10 } = options;

    let filteredFAQs = faqs.filter(faq => faq.isActive);

    // Filter by category
    if (category) {
      filteredFAQs = filteredFAQs.filter(faq => faq.category === category);
    }

    // Search in questions and answers
    if (search) {
      const searchTerm = search.toLowerCase();
      filteredFAQs = filteredFAQs.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm) ||
        faq.answer.toLowerCase().includes(searchTerm)
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedFAQs = filteredFAQs.slice(startIndex, endIndex);

    // Get unique categories
    const categories = [...new Set(faqs.map(faq => faq.category))];

    return {
      faqs: paginatedFAQs.map(faq => serializeFAQ(faq)),
      categories,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(filteredFAQs.length / limit),
        totalItems: filteredFAQs.length,
        itemsPerPage: parseInt(limit)
      }
    };
  } catch (error) {
    throw new Error(`Failed to get FAQs: ${error.message}`);
  }
};

// Get FAQ by ID service
export const getFAQById = async (faqId) => {
  try {
    const faq = faqs.find(faq => faq.id === faqId && faq.isActive);
    if (!faq) {
      throw new Error('FAQ not found');
    }
    return serializeFAQ(faq);
  } catch (error) {
    throw new Error(`Failed to get FAQ: ${error.message}`);
  }
};

// Update FAQ service
export const updateFAQService = async (faqId, updateData) => {
  try {
    const faqIndex = faqs.findIndex(faq => faq.id === faqId);
    if (faqIndex === -1) {
      throw new Error('FAQ not found');
    }

    validateFAQ({ ...faqs[faqIndex], ...updateData });
    faqs[faqIndex] = updateFAQ(faqs[faqIndex], updateData);
    return serializeFAQ(faqs[faqIndex]);
  } catch (error) {
    throw new Error(`Failed to update FAQ: ${error.message}`);
  }
};

// Delete FAQ service
export const deleteFAQService = async (faqId) => {
  try {
    const faqIndex = faqs.findIndex(faq => faq.id === faqId);
    if (faqIndex === -1) {
      throw new Error('FAQ not found');
    }

    faqs[faqIndex].isActive = false;
    faqs[faqIndex].updatedAt = new Date().toISOString();
    return { message: 'FAQ deleted successfully' };
  } catch (error) {
    throw new Error(`Failed to delete FAQ: ${error.message}`);
  }
};