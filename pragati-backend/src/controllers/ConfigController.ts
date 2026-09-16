import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getComplianceRules = async (req: Request, res: Response) => {
  try {
    const rules = await prisma.complianceRule.findMany({
      orderBy: {
        created_at: 'asc'
      }
    });
    
    res.json({
      success: true,
      data: rules
    });
  } catch (error) {
    console.error('Error fetching compliance rules:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

export const getPortalConnectors = async (req: Request, res: Response) => {
  try {
    const connectors = await prisma.portalConnector.findMany({
      orderBy: {
        created_at: 'asc'
      }
    });

    res.json({
      success: true,
      data: connectors
    });
  } catch (error) {
    console.error('Error fetching portal connectors:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
