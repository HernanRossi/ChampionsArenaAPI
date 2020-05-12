'use strict'

import express from 'express';
import AuthService from '../services/auth-service.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const response = await AuthService.authenticate();
  res.json(response);
});

export default router;