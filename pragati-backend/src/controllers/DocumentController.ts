import { Request, Response } from 'express';
import { BaseController } from './BaseController';
import { documentProcessingService } from '../services/DocumentProcessingService';
import { auditService } from '../services/AuditService';
import { storageService } from '../services/StorageService';
import fs from 'fs';
import path from 'path';

export class DocumentController extends BaseController {
  public uploadDocument = async (req: Request, res: Response): Promise<void> => {
    try {
      if (!req.file) {
        res.status(400).json({ success: false, error: 'No file uploaded' });
        return;
      }

      const filePath = req.file.path;
      const mimeType = req.file.mimetype;

      const extractionResult = await documentProcessingService.processDocument(filePath, mimeType);

      // Determine a unique object key for MinIO
      const fileName = path.basename(filePath);
      const destinationKey = `uploads/${Date.now()}_${fileName}`;

      // Upload original file to MinIO
      await storageService.uploadFile(filePath, destinationKey, mimeType);

      // Clean up uploaded local temporary file
      fs.unlinkSync(filePath);

      // Log the document upload action
      await auditService.logAction({
        action: 'DOCUMENT_UPLOADED',
        details: { mimeType, destinationKey, extractionSuccess: !!extractionResult },
      });

      this.handleSuccess(res, {
        ...extractionResult,
        storageKey: destinationKey
      });
    } catch (error) {
      this.handleError(error, res, 'DocumentController.uploadDocument');
    }
  };
}
