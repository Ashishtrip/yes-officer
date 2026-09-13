import { Request, Response } from 'express';
import { BaseController } from './BaseController';
import { ComplianceEngineService } from '../services/ComplianceEngineService';
import { ScoringService } from '../services/ScoringService';
import { PortalIntegrationService } from '../services/PortalIntegrationService';

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

  public ingestBid = async (req: Request, res: Response): Promise<void> => {
    const { tenderId, bidder, documents } = req.body;

    // 1. Cross-validate bidder data via Portals
    const verificationResults = await this.complianceEngine.crossValidateBidder(bidder);

    // 2. Calculate score and risk
    const scoringResult = await this.scoringService.calculateScoreAndRisk(verificationResults);

    // 3. Save to database (mocked for now since Prisma client generation failed)
    const savedBid = {
      id: `bid_${Math.random().toString(36).substring(7)}`,
      tenderId,
      bidderId: `bidder_${Math.random().toString(36).substring(7)}`,
      status: 'PROCESSED',
      complianceScore: scoringResult.score,
      riskLevel: scoringResult.riskLevel,
      aiRecommendation: scoringResult.recommendation,
      createdAt: new Date(),
    };

    this.handleSuccess(res, {
      bid: savedBid,
      verificationResults,
      scoringResult
    }, 201);
  };
}
