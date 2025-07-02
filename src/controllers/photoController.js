import * as PhotoService from '../services/photoService.js';

// Upload photos controller
export const uploadPhotos = async (req, res) => {
  try {
    const { companyId, technicianId, description, category } = req.body;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No photos uploaded'
      });
    }

    const photoData = { companyId, technicianId, description, category };
    const uploadedPhotos = await PhotoService.createPhotos(req.files, photoData);

    res.status(201).json({
      success: true,
      message: 'Photos uploaded successfully',
      data: uploadedPhotos
    });
  } catch (error) {
    console.error('Photo upload error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get photos by company controller
export const getPhotosByCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const { page, limit, category } = req.query;

    const result = await PhotoService.getPhotosByCompany(companyId, { page, limit, category });

    res.json({
      success: true,
      data: result.photos,
      pagination: result.pagination
    });
  } catch (error) {
    console.error('Get photos error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get photo by ID controller
export const getPhotoById = async (req, res) => {
  try {
    const { photoId } = req.params;
    const photo = await PhotoService.getPhotoById(photoId);

    res.json({
      success: true,
      data: photo
    });
  } catch (error) {
    console.error('Get photo error:', error);
    const statusCode = error.message === 'Photo not found' ? 404 : 500;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

// Delete photo controller
export const deletePhoto = async (req, res) => {
  try {
    const { photoId } = req.params;
    const result = await PhotoService.deletePhoto(photoId);

    res.json({
      success: true,
      message: result.message
    });
  } catch (error) {
    console.error('Delete photo error:', error);
    const statusCode = error.message === 'Photo not found' ? 404 : 500;
    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};