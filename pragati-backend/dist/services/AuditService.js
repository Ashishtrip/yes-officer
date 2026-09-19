"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditService = exports.AuditService = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
class AuditService {
    async logAction(payload) {
        try {
            await prisma_1.default.auditLog.create({
                data: payload
            });
            console.log(`Audit log created: ${payload.action}`);
        }
        catch (error) {
            console.error('Error writing audit log to Postgres:', error);
        }
    }
    async getLogs() {
        try {
            return await prisma_1.default.auditLog.findMany({
                orderBy: { timestamp: 'desc' },
                take: 100
            });
        }
        catch (error) {
            console.error('Error getting audit logs:', error);
            return [];
        }
    }
    async searchLogs(query) {
        try {
            return await prisma_1.default.auditLog.findMany({
                where: {
                    OR: [
                        { action: { contains: query, mode: 'insensitive' } },
                        { target: { contains: query, mode: 'insensitive' } },
                        { user_email: { contains: query, mode: 'insensitive' } }
                    ]
                },
                orderBy: { timestamp: 'desc' },
                take: 100
            });
        }
        catch (error) {
            console.error('Error searching audit logs:', error);
            return [];
        }
    }
}
exports.AuditService = AuditService;
exports.auditService = new AuditService();
