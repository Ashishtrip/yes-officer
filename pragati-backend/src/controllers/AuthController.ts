import { Request, Response } from 'express';
import { BaseController } from './BaseController';
import { authService } from '../services/AuthService';
import { auditService } from '../services/AuditService';

export class AuthController extends BaseController {
  public register = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await authService.register(req.body);
      
      // Log registration
      await auditService.logAction({
        action: 'USER_REGISTER',
        user_id: result.user.id,
        details: { email: result.user.email, role: result.user.role },
        ip_address: req.ip,
      });

      this.handleSuccess(res, result, 201);
    } catch (error) {
      this.handleError(error, res, 'AuthController.register');
    }
  };

  public login = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await authService.login(req.body);
      
      // Log login
      await auditService.logAction({
        action: 'USER_LOGIN',
        user_id: result.user.id,
        details: { email: result.user.email },
        ip_address: req.ip,
      });

      this.handleSuccess(res, result);
    } catch (error) {
      this.handleError(error, res, 'AuthController.login');
    }
  };

  public me = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = (req as any).user;
      if (!user) {
        this.handleError(new Error('Unauthorized'), res, 'AuthController.me', 401);
        return;
      }
      this.handleSuccess(res, { user });
    } catch (error) {
      this.handleError(error, res, 'AuthController.me');
    }
  };
}

