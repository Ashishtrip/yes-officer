import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { authenticateJWT, requireRole } from '../middlewares/authMiddleware';

const router = Router();
const userController = new UserController();

// Only ADMIN and PROCUREMENT_OFFICER can manage users in this MVP
router.get('/', authenticateJWT, requireRole(['ADMIN', 'PROCUREMENT_OFFICER']), userController.getUsers);
router.post('/', authenticateJWT, requireRole(['ADMIN', 'PROCUREMENT_OFFICER']), userController.createUser);

export default router;
