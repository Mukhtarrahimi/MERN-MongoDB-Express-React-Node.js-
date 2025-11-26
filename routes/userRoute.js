import express from 'express';
const router = express.Router();
import {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

router.post('/create', createUser);
router.get('/', getAllUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
export default router;
