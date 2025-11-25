import express from 'express';
const router = express.Router();
import { createUser, getAllUser } from '../controllers/userController.js';

router.post('/create', createUser);
router.get('/', getAllUser);

export default router;
