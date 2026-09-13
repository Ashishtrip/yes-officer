import { Request, Response } from 'express';
import { BaseController } from './BaseController';
import { documentProcessingService } from '../services/DocumentProcessingService';
import fs from 'fs';

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

      // Clean up uploaded file
      fs.unlinkSync(filePath);

      this.handleSuccess(res, extractionResult);
    } catch (error) {
      this.handleError(error, res, 'DocumentController.uploadDocument');
    }
  };
}
