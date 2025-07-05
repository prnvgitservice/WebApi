import * as serviceService from '../services/services.service.js';

export const createService = async (req, res) => {
  try {
    console.log("req.user", req.user)
    const technicianId = req.user.id;
    const service = await serviceService.createService(technicianId, req.body);
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getMyServices = async (req, res) => {
  try {
    const services = await serviceService.getServicesByTechnician(req.user._id);
    res.json({ services });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getServiceById = async (req, res) => {
  try {
    const service = await serviceService.getServiceById(req.params.id);
    if (!service) return res.status(404).json({ error: 'Service not found' });
    res.json(service);
  } catch (err) {
    res.status(400).json({ error: 'Invalid service ID' });
  }
};

export const updateService = async (req, res) => {
  try {
    const updated = await serviceService.updateService(req.user.id, req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Service not found or unauthorized' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteService = async (req, res) => {
  try {
    const result = await serviceService.deleteService(req.user.id, req.params.id);
    if (!result) return res.status(404).json({ error: 'Service not found or unauthorized' });
    res.json({ message: 'Service deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getTopRatedServices = async (req, res) => {
  try {
    const topRated = await serviceService.getTopRatedServices();
    res.json({ services: topRated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMostPopularServices = async (req, res) => {
  try {
    const popular = await serviceService.getMostPopularServices();
    res.json({ services: popular });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getServicesByCompanyId = async (req, res) => {
  try {
    const { company } = req.params;

    const services = await getByCompany(company);

    if (!services || services.length === 0) {
      return res.status(404).json({ error: 'No services found for this company' });
    }

    res.json({ services });
  } catch (err) {
    res.status(400).json({ error: 'Invalid company ID' });
  }
};



import { getAllFilterOptions } from '../services/services.service.js';

export const getAllFilters = async (req, res) => {
  try {
    const filters = await getAllFilterOptions();
    res.json(filters);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch filters' });
  }
};