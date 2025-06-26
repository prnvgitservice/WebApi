import { Router } from 'express';
import { registerTechnicianController, loginTechnicianController } from '../../controllers/authControllers/technician';

const router = Router();

router.post('/register', registerTechnicianController);
router.post('/login', loginTechnicianController);

export default router;
