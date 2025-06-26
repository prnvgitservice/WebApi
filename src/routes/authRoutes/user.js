import { Router } from 'express';
import { login, register } from '../../controllers/authControllers/user.js';
// import { register, login } from '../controllers/auth.controller.js';

const router = Router();
      
router.post('/register', register);
router.post('/login', login);

export default router;

// const express = require('express');
// const { registerUser, loginUser } = require('../src/controllers/authControllers/user');
// const router = express.Router();

// router.post('/register', registerUser);
// router.post('/login', loginUser);

// module.exports = router;
