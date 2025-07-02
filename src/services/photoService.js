import { createPhoto, validatePhoto, serializePhoto } from '../models/Photo.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory storage (replace with database)
let photos = [];

// Create photos service
export const createPhotos = async (files, photoData) => {
  try {
    validatePhoto(photoData);

    const uploadedPhotos = files.map(file => {
      const photo = createPhoto({
        ...photoData,
        filename: file.filename,
        originalName: file.originalname,
        path: `/uploads/photos/${file.filename}`,
        size: file.size,
        mimetype: file.mimetype
      });
      return photo;
    });

    photos.push(...uploadedPhotos);
    return uploadedPhotos.map(photo => serializePhoto(photo));
  } catch (error) {
    throw new Error(`Failed to create photos: ${error.message}`);
  }
};

// Get photos by company service
export const getPhotosByCompany = async (companyId, options = {}) => {
  try {
    const { page = 1, limit = 10, category } = options;

    let filteredPhotos = photos.filter(photo => photo.companyId === companyId);

    if (category) {
      filteredPhotos = filteredPhotos.filter(photo => photo.category === category);
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedPhotos = filteredPhotos.slice(startIndex, endIndex);

    return {
      photos: paginatedPhotos.map(photo => serializePhoto(photo)),
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(filteredPhotos.length / limit),
        totalItems: filteredPhotos.length,
        itemsPerPage: parseInt(limit)
      }
    };
  } catch (error) {
    throw new Error(`Failed to get photos: ${error.message}`);
  }
};

// Get photo by ID service
export const getPhotoById = async (photoId) => {
  try {
    const photo = photos.find(photo => photo.id === photoId);
    if (!photo) {
      throw new Error('Photo not found');
    }
    return serializePhoto(photo);
  } catch (error) {
    throw new Error(`Failed to get photo: ${error.message}`);
  }
};

// Delete photo service
export const deletePhoto = async (photoId) => {
  try {
    const photoIndex = photos.findIndex(photo => photo.id === photoId);
    if (photoIndex === -1) {
      throw new Error('Photo not found');
    }

    const photo = photos[photoIndex];
    const filePath = path.join(__dirname, '../uploads/photos', photo.filename);

    // Delete file from filesystem
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Remove from array
    photos.splice(photoIndex, 1);
    return { message: 'Photo deleted successfully' };
  } catch (error) {
    throw new Error(`Failed to delete photo: ${error.message}`);
  }
};