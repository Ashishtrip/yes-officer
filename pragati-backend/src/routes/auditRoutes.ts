import { Router } from 'express';
import { AuditController } from '../controllers/AuditController';
import { authenticateJWT, requireRole } from '../middlewares/authMiddleware';

const router = Router();
const auditController = new AuditController();

// Restrict search to AUDITOR and ADMIN roles
router.get('/search', authenticateJWT, requireRole(['AUDITOR', 'ADMIN']), auditController.searchLogs);

export default router;
