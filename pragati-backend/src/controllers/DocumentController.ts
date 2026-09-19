import { Request, Response } from 'express';
import { BaseController } from './BaseController';
import { documentQueue } from '../config/queue';
import { auditService } from '../services/AuditService';
import { storageService } from '../services/StorageService';
import fs from 'fs';
import path from 'path';
import prisma from '../utils/prisma';

export class DocumentController extends BaseController {
  public uploadDocument = async (req: Request, res: Response): Promise<void> => {
    try {
      if (!req.file) {
        res.status(400).json({ success: false, error: 'No file uploaded' });
        return;
      }

      const filePath = req.file.path;
      const mimeType = req.file.mimetype;
      const { bidId } = req.body; // Expecting bidId in form data

      if (!bidId) {
        fs.unlinkSync(filePath);
        res.status(400).json({ success: false, error: 'bidId is required' });
        return;
      }

      // Determine a unique object key for MinIO
      const fileName = path.basename(filePath);
      const destinationKey = `uploads/${Date.now()}_${fileName}`;

      // Upload original file to MinIO
      await storageService.uploadFile(filePath, destinationKey, mimeType);

      // Clean up uploaded local temporary file
      fs.unlinkSync(filePath);

      // Create a Document record in DB to track extraction
      const documentRecord = await prisma.document.create({
        data: {
          bid_id: bidId,
          document_type: 'PENDING_CLASSIFICATION',
          file_path: destinationKey,
        }
      });

      // Enqueue job for background extraction and validation
      await documentQueue.add('process-document', {
        documentId: documentRecord.id,
        documentKey: destinationKey,
        mimeType: mimeType,
        bidId: bidId
      }, {
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 2000
        }
      });

      this.handleSuccess(res, {
        message: 'Document uploaded and queued for processing',
        documentId: documentRecord.id,
        storageKey: destinationKey
      });
    } catch (error) {
      this.handleError(error, res, 'DocumentController.uploadDocument');
    }
  };
}
