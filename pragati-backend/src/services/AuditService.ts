import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface AuditLogPayload {
  action: string;
  user_email: string;
  target: string;
  status: string;
  details?: any;
  ip_address?: string;
}

export class AuditService {
  public async logAction(payload: AuditLogPayload): Promise<void> {
    try {
      await prisma.auditLog.create({
        data: payload
      });
      console.log(`Audit log created: ${payload.action}`);
    } catch (error) {
      console.error('Error writing audit log to Postgres:', error);
    }
  }

  public async getLogs() {
    try {
      return await prisma.auditLog.findMany({
        orderBy: { timestamp: 'desc' },
        take: 100
      });
    } catch (error) {
      console.error('Error getting audit logs:', error);
      return [];
    }
  }

  public async searchLogs(query: string) {
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
    } catch (error) {
      console.error('Error searching audit logs:', error);
      return [];
    }
  }
}

export const auditService = new AuditService();
