import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { BaseController } from './BaseController';
import { ComplianceEngineService } from '../services/ComplianceEngineService';
import { ScoringService } from '../services/ScoringService';
import { PortalIntegrationService } from '../services/PortalIntegrationService';
import { auditService } from '../services/AuditService';

const prisma = new PrismaClient();

export class BidController extends BaseController {
  private complianceEngine: ComplianceEngineService;
  private scoringService: ScoringService;

  constructor() {
    super();
    // In a real app with DI container (like TSyringe), these would be injected.
    const portalService = new PortalIntegrationService();
    this.complianceEngine = new ComplianceEngineService(portalService);
    this.scoringService = new ScoringService();
  }

  public getBidById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const bid = await prisma.bid.findUnique({
        where: { id },
        include: {
          tender: true,
          bidder: true,
          verificationChecks: true,
          documents: true,
        }
      });
      
      if (!bid) {
        return this.handleError(res, new Error('Bid not found'), 'Bid not found', 404);
      }
      
      this.handleSuccess(res, { bid });
    } catch (error) {
      console.error('Error fetching bid details:', error);
      this.handleError(res, error as Error, 'Failed to fetch bid details');
    }
  };

  public submitDecision = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { decision, comments } = req.body;
    
    try {
      const bid = await prisma.bid.update({
        where: { id },
        data: {
          po_decision: decision,
          po_comments: comments,
          status: decision === 'APPROVED' ? 'ACCEPTED' : 'REJECTED'
        }
      });
      
      // Log action to audit service
      await auditService.logAction({
        action: `PO_DECISION_${decision}`,
        bid_id: id,
        tender_id: bid.tender_id,
        details: { comments, decision }
      });
      
      this.handleSuccess(res, { bid, message: 'Decision submitted successfully' });
    } catch (error) {
      console.error('Error submitting PO decision:', error);
      this.handleError(res, error as Error, 'Failed to submit PO decision');
    }
  };

  public ingestBid = async (req: Request, res: Response): Promise<void> => {
    const { tenderId, bidder, documents } = req.body;

    // 1. Cross-validate bidder data via Portals
    const verificationResults = await this.complianceEngine.crossValidateBidder(bidder);

    // 2. Calculate score and risk
    const scoringResult = await this.scoringService.calculateScoreAndRisk(verificationResults);

    // 3. Save to database using Prisma
    try {
      // Upsert bidder first
      const savedBidder = await prisma.bidder.upsert({
        where: {
          id: bidder.id || 'NEW', // In reality, maybe match on PAN/GSTIN, but we will create for now if no ID
        },
        update: {},
        create: {
          entity_name: bidder.entityName || 'Unknown Entity',
          pan: bidder.pan,
          gstin: bidder.gstin,
          udyam_number: bidder.udyamNumber,
          gem_seller_id: bidder.gemSellerId || 'UNKNOWN',
          entity_type: bidder.entityType || 'Private Limited',
        }
      });

      const savedBid = await prisma.bid.create({
        data: {
          tender_id: tenderId,
          bidder_id: savedBidder.id,
          status: 'PROCESSED',
          compliance_score: scoringResult.score,
          risk_level: scoringResult.riskLevel,
          ai_recommendation: scoringResult.recommendation,
          verificationChecks: {
            create: verificationResults.map(r => ({
              check_type: r.checkType,
              portal_source: r.portalSource,
              status: r.status,
              match_result: r.matchResult || null,
              discrepancy_detail: r.discrepancyDetail || null,
            }))
          }
        },
        include: { verificationChecks: true }
      });

      // Log the bid ingestion action
      await auditService.logAction({
        action: 'BID_INGESTED',
        bid_id: savedBid.id,
        tender_id: tenderId,
        details: { bidder, complianceScore: scoringResult.score, riskLevel: scoringResult.riskLevel },
      });

      this.handleSuccess(res, {
        bid: savedBid,
        verificationResults,
        scoringResult
      }, 201);
    } catch (error) {
      console.error('Error saving bid to DB:', error);
      this.handleError(res, error as Error, 'Failed to ingest bid');
    }
  };
}
