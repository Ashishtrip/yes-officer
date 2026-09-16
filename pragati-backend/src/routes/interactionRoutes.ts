import { Router } from 'express';
import { getClarifications, getGrievances } from '../controllers/InteractionController';

const router = Router();

router.get('/clarifications', getClarifications);
router.get('/grievances', getGrievances);

export default router;
