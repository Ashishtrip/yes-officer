import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { BaseController } from './BaseController';

const prisma = new PrismaClient();

export class TenderController extends BaseController {
  
  public getTenders = async (req: Request, res: Response): Promise<void> => {
    try {
      const tenders = await prisma.tender.findMany({
        include: {
          _count: {
            select: { bids: true }
          }
        },
        orderBy: { created_at: 'desc' }
      });
      
      this.handleSuccess(res, { tenders });
    } catch (error) {
      console.error('Error fetching tenders:', error);
      this.handleError(error, res, 'Failed to fetch tenders');
    }
  };

  public getTenderById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    
    try {
      const tender = await prisma.tender.findUnique({
        where: { id: id as string },
        include: {
          bids: {
            include: {
              bidder: true,
              verificationChecks: true
            }
          }
        }
      });
      
      if (!tender) {
        return this.handleError(new Error('Tender not found'), res, 'Tender not found', 404);
      }
      
      this.handleSuccess(res, { tender });
    } catch (error) {
      console.error('Error fetching tender details:', error);
      this.handleError(error, res, 'Failed to fetch tender details');
    }
  };
}
