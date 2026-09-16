"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditController = void 0;
const BaseController_1 = require("./BaseController");
const AuditService_1 = require("../services/AuditService");
class AuditController extends BaseController_1.BaseController {
    searchLogs = async (req, res) => {
        try {
            const query = req.query.q;
            if (!query) {
                res.status(400).json({ success: false, error: 'Search query "q" is required' });
                return;
            }
            const logs = await AuditService_1.auditService.searchLogs(query);
            this.handleSuccess(res, { logs });
        }
        catch (error) {
            this.handleError(error, res, 'AuditController.searchLogs');
        }
    };
    getLogs = async (req, res) => {
        try {
            const logs = await AuditService_1.auditService.getLogs();
            this.handleSuccess(res, { logs });
        }
        catch (error) {
            this.handleError(error, res, 'AuditController.getLogs');
        }
    };
}
exports.AuditController = AuditController;
