import { Router } from 'express';
import { TenderController } from '../controllers/TenderController';
import { asyncErrorWrapper } from '../utils/asyncErrorWrapper';
import { authenticateJWT } from '../middlewares/authMiddleware';

const router = Router();
const tenderController = new TenderController();

router.get('/', authenticateJWT, asyncErrorWrapper(tenderController.getTenders));
router.get('/:id', authenticateJWT, asyncErrorWrapper(tenderController.getTenderById));

export { router as tenderRoutes };
