import Category from '../models/category.model.js';

export const createCategory = async (data) => {
  return await Category.create(data);
};

export const updateCategory = async (id, updates) => {
  return await Category.findByIdAndUpdate(id, updates, { new: true });
};

export const deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};

export const getAllCategories = async (filter = {}, sort = { createdAt: -1 }) => {
  return await Category.find(filter).sort(sort);
};

export const getCategoryById = async (id) => {
  return await Category.findById(id);
};

export const getCategoryBySlug = async (slug) => {
  return await Category.findOne({ category_slug: slug });
};

export const getCategoriesByStatus = async (status) => {
  return await Category.find({ status: Number(status) });
};

export const getCategoriesByViews = async (minViews = 0) => {
  return await Category.find({ totalviews: { $gte: Number(minViews) } });
};

export const getCategoriesByRatings = async (minRating = 0) => {
  return await Category.find({ ratings: { $gte: Number(minRating) } });
};