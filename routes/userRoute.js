import express from 'express';
const router = express.Router();
import {
  createUser,
  getAllUser,
  getUser,
  updateUser,
} from '../controllers/userController.js';

router.post('/create', createUser);
router.get('/', getAllUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
export default router;
