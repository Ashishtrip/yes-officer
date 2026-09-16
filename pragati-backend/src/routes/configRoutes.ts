import { Router } from 'express';
import { getComplianceRules, getPortalConnectors } from '../controllers/ConfigController';

const router = Router();

router.get('/compliance-rules', getComplianceRules);
router.get('/portal-connectors', getPortalConnectors);

export default router;
