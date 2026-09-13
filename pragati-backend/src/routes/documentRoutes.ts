import { Router } from 'express';
import multer from 'multer';
import { DocumentController } from '../controllers/DocumentController';
import { authenticateJWT, requireRole } from '../middlewares/authMiddleware';

const router = Router();
const documentController = new DocumentController();

// Use temp directory inside the project for safety
const upload = multer({ dest: './uploads/' });

router.post(
  '/upload',
  authenticateJWT,
  requireRole(['PROCUREMENT_OFFICER', 'ADMIN', 'BIDDER']),
  upload.single('document'),
  documentController.uploadDocument
);

export default router;
