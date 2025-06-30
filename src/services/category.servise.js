import Category from '.././models/category.model.js';

export const createCategory = async (data) => {
  return await Category.create(data);
};

export const getAllCategories = async (filter = {}, sort = { createdAt: -1 }) => {
  return await Category.find(filter).sort(sort);
};

export const getCategoryById = async (id) => {
  return await Category.findById(id);
};