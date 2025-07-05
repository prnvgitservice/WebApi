import * as techService from '../../services/authServices/technician';

export const registerTechnicianController = async (req, res, next) => {
  try {
    const result = await techService.registerTechnician(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

export const loginTechnicianController = async (req, res, next) => {
  try {
    const result = await techService.loginTechnician(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
