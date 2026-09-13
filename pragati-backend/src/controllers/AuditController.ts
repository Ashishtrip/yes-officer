import { Request, Response } from 'express';
import { BaseController } from './BaseController';
import { auditService } from '../services/AuditService';

export class AuditController extends BaseController {
  public searchLogs = async (req: Request, res: Response): Promise<void> => {
    try {
      const query = req.query.q as string;
      
      if (!query) {
        res.status(400).json({ success: false, error: 'Search query "q" is required' });
        return;
      }

      const logs = await auditService.searchLogs(query);
      this.handleSuccess(res, { logs });
    } catch (error) {
      this.handleError(error, res, 'AuditController.searchLogs');
    }
  };
}
