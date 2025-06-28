import express from 'express';
import * as CategoryController from '../controllers/category.controller.js';

const router = express.Router();

router.post('/', CategoryController.createCategory);
router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getCategory);

export default router;
