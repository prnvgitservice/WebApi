import express from 'express';
import * as FAQController from '../controllers/faqController.js';

const router = express.Router();

// Routes
router.post('/', FAQController.createFAQ);
router.get('/', FAQController.getFAQs);
router.get('/:faqId', FAQController.getFAQById);
router.put('/:faqId', FAQController.updateFAQ);
router.delete('/:faqId', FAQController.deleteFAQ);

export default router;