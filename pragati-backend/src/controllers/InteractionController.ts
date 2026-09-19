import { Request, Response } from 'express';
import prisma from '../utils/prisma';


export const getClarifications = async (req: Request, res: Response) => {
  try {
    const clarifications = await prisma.clarification.findMany({
      include: {
        bid: {
          include: {
            bidder: true,
            tender: true,
          }
        }
      },
      orderBy: {
        created_at: 'desc'
      }
    });
    
    res.json({
      success: true,
      data: clarifications
    });
  } catch (error) {
    console.error('Error fetching clarifications:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

export const getGrievances = async (req: Request, res: Response) => {
  try {
    const grievances = await prisma.grievance.findMany({
      include: {
        bid: {
          include: {
            bidder: true,
            tender: true,
          }
        }
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    res.json({
      success: true,
      data: grievances
    });
  } catch (error) {
    console.error('Error fetching grievances:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
