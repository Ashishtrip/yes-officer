import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { authenticateJWT, requireRole } from '../middlewares/authMiddleware';

const router = Router();
const userController = new UserController();

// Only ADMIN can manage users in this MVP
router.get('/', authenticateJWT, requireRole(['ADMIN']), userController.getUsers);
router.post('/', authenticateJWT, requireRole(['ADMIN']), userController.createUser);

export default router;
