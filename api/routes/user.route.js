import express from 'express';
import { register, login } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/register', register);
router.get('/login', login);

export default router;
