import { v4 as uuidv4 } from 'uuid';

// Photo model factory function
export const createPhoto = (data) => {
  return {
    id: data.id || uuidv4(),
    companyId: data.companyId,
    technicianId: data.technicianId,
    filename: data.filename,
    originalName: data.originalName,
    path: data.path,
    size: data.size,
    mimetype: data.mimetype,
    description: data.description || '',
    category: data.category || 'work',
    uploadedAt: data.uploadedAt || new Date().toISOString()
  };
};

// Photo validation function
export const validatePhoto = (data) => {
  const required = ['companyId', 'technicianId'];
  const missing = required.filter(field => !data[field]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }

  const validCategories = ['work', 'before', 'after', 'tools', 'certificate'];
  if (data.category && !validCategories.includes(data.category)) {
    throw new Error(`Invalid category. Must be one of: ${validCategories.join(', ')}`);
  }

  return true;
};

// Photo serialization function
export const serializePhoto = (photo) => {
  return {
    id: photo.id,
    companyId: photo.companyId,
    technicianId: photo.technicianId,
    filename: photo.filename,
    originalName: photo.originalName,
    path: photo.path,
    size: photo.size,
    mimetype: photo.mimetype,
    description: photo.description,
    category: photo.category,
    uploadedAt: photo.uploadedAt
  };
};