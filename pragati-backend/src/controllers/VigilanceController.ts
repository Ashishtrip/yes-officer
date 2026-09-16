import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getVigilanceAnalytics = async (req: Request, res: Response) => {
  try {
    const flags = await prisma.vigilanceFlag.findMany({
      include: {
        bid: {
          include: {
            bidder: true,
            tender: true,
          }
        }
      },
      orderBy: {
        detected_at: 'desc'
      }
    });
    
    res.json({
      success: true,
      data: flags
    });
  } catch (error) {
    console.error('Error fetching vigilance analytics:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

export const getForensicIntegrity = async (req: Request, res: Response) => {
  try {
    const flags = await prisma.vigilanceFlag.findMany({
      where: {
        flag_type: {
          in: ['IP_SPOOFING', 'CARTEL_RISK', 'TAX_EVASION'] // Adjust as necessary
        }
      },
      include: {
        bid: {
          include: {
            bidder: true,
            tender: true,
          }
        }
      },
      orderBy: {
        detected_at: 'desc'
      }
    });

    res.json({
      success: true,
      data: flags
    });
  } catch (error) {
    console.error('Error fetching forensic integrity:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
