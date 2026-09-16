"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const BaseController_1 = require("./BaseController");
const AuthService_1 = require("../services/AuthService");
const AuditService_1 = require("../services/AuditService");
class AuthController extends BaseController_1.BaseController {
    register = async (req, res) => {
        try {
            const result = await AuthService_1.authService.register(req.body);
            // Log registration
            await AuditService_1.auditService.logAction({
                action: 'USER_REGISTER',
                user_email: result.user.email,
                target: 'System',
                status: 'SUCCESS',
                details: { role: result.user.role },
                ip_address: req.ip || '',
            });
            this.handleSuccess(res, result, 201);
        }
        catch (error) {
            this.handleError(error, res, 'AuthController.register');
        }
    };
    login = async (req, res) => {
        try {
            const result = await AuthService_1.authService.login(req.body);
            // Log login
            await AuditService_1.auditService.logAction({
                action: 'USER_LOGIN',
                user_email: result.user.email,
                target: 'System',
                status: 'SUCCESS',
                ip_address: req.ip || '',
            });
            this.handleSuccess(res, result);
        }
        catch (error) {
            this.handleError(error, res, 'AuthController.login');
        }
    };
    me = async (req, res) => {
        try {
            const user = req.user;
            if (!user) {
                this.handleError(new Error('Unauthorized'), res, 'AuthController.me', 401);
                return;
            }
            this.handleSuccess(res, { user });
        }
        catch (error) {
            this.handleError(error, res, 'AuthController.me');
        }
    };
}
exports.AuthController = AuthController;
