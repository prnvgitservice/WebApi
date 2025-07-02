import express from 'express';
import * as SubscriptionController from '../controllers/subscriptionController.js';

const router = express.Router();

// Subscription Plan Routes
router.post('/plans', SubscriptionController.createSubscriptionPlan);
router.get('/plans', SubscriptionController.getSubscriptionPlans);
router.get('/plans/:planId', SubscriptionController.getSubscriptionPlanById);
router.put('/plans/:planId', SubscriptionController.updateSubscriptionPlan);
router.delete('/plans/:planId', SubscriptionController.deleteSubscriptionPlan);

// User Subscription Routes
router.post('/', SubscriptionController.createSubscription);
router.get('/user/:technicianId', SubscriptionController.getUserSubscriptions);
router.get('/:subscriptionId', SubscriptionController.getSubscriptionById);
router.put('/:subscriptionId', SubscriptionController.updateSubscription);

export default router;