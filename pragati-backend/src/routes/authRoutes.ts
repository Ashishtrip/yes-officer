import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { authenticateJWT } from '../middlewares/authMiddleware';

const router = Router();
const authController = new AuthController();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', authenticateJWT, authController.me);

export default router;
