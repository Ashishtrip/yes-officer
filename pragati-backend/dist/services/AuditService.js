"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditService = exports.AuditService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class AuditService {
    async logAction(payload) {
        try {
            await prisma.auditLog.create({
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
            return await prisma.auditLog.findMany({
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
            return await prisma.auditLog.findMany({
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
