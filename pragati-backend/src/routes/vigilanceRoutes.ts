import { Router } from 'express';
import { getVigilanceAnalytics, getForensicIntegrity } from '../controllers/VigilanceController';

const router = Router();

router.get('/analytics', getVigilanceAnalytics);
router.get('/forensics', getForensicIntegrity);

export default router;
