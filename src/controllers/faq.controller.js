import * as FAQService from '../services/faqService.js';

// Create FAQ controller
export const createFAQ = async (req, res) => {
  try {
    const faqData = req.body;
    const faq = await FAQService.createFAQService(faqData);

    res.status(201).json({
      success: true,
      message: 'FAQ added successfully',
      data: faq
    });
  } catch (error) {
    console.error('Add FAQ error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get FAQs controller
export const getFAQs = async (req, res) => {
  try {
    const { category, search, page, limit } = req.query;
    const result = await FAQService.getFAQs({ category, search, page, limit });

    res.json({
      success: true,
      data: result.faqs,
      categories: result.categories,
      pagination: result.pagination
    });
  } catch (error) {
    console.error('Get FAQs error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get FAQ by ID controller
export const getFAQById = async (req, res) => {
  try {
    const { faqId } = req.params;
    const faq = await FAQService.getFAQById(faqId);

    res.json({
      success: true,
      data: faq
    });
  } catch (error) {
    console.error('Get FAQ error:', error);
    const statusCode = error.message === 'FAQ not found' ? 404 : 500;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

// Update FAQ controller
export const updateFAQ = async (req, res) => {
  try {
    const { faqId } = req.params;
    const updateData = req.body;

    const faq = await FAQService.updateFAQService(faqId, updateData);

    res.json({
      success: true,
      message: 'FAQ updated successfully',
      data: faq
    });
  } catch (error) {
    console.error('Update FAQ error:', error);
    const statusCode = error.message === 'FAQ not found' ? 404 : 500;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

// Delete FAQ controller
export const deleteFAQ = async (req, res) => {
  try {
    const { faqId } = req.params;
    const result = await FAQService.deleteFAQService(faqId);

    res.json({
      success: true,
      message: result.message
    });
  } catch (error) {
    console.error('Delete FAQ error:', error);
    const statusCode = error.message === 'FAQ not found' ? 404 : 500;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};