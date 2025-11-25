import express from 'express';
const router = express.Router();
import {
  createUser,
  getAllUser,
  getUser,
} from '../controllers/userController.js';

router.post('/create', createUser);
router.get('/', getAllUser);
router.get('/:id', getUser);
export default router;
