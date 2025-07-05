import express from 'express';
import * as AdminSubscriptionController from '../controllers/adminSubscriptionController.js';
import { adminAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

// Apply admin authentication middleware to all routes
router.use(adminAuth);

// Subscription Plan Management Routes
router.post('/plans', AdminSubscriptionController.createSubscriptionPlan);
router.get('/plans', AdminSubscriptionController.getAllSubscriptionPlans);
router.get('/plans/statistics', AdminSubscriptionController.getPlanStatistics);
router.get('/plans/:planId', AdminSubscriptionController.getSubscriptionPlanById);
router.put('/plans/:planId', AdminSubscriptionController.updateSubscriptionPlan);
router.delete('/plans/:planId', AdminSubscriptionController.deleteSubscriptionPlan);

// Additional admin operations
router.patch('/plans/:planId/toggle-status', AdminSubscriptionController.togglePlanStatus);
router.post('/plans/:planId/duplicate', AdminSubscriptionController.duplicatePlan);
router.put('/plans/bulk-update', AdminSubscriptionController.bulkUpdatePlans);

export default router;