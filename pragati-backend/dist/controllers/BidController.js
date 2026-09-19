"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidController = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const BaseController_1 = require("./BaseController");
const ComplianceEngineService_1 = require("../services/ComplianceEngineService");
const ScoringService_1 = require("../services/ScoringService");
const PortalIntegrationService_1 = require("../services/PortalIntegrationService");
const AuditService_1 = require("../services/AuditService");
class BidController extends BaseController_1.BaseController {
    complianceEngine;
    scoringService;
    constructor() {
        super();
        // In a real app with DI container (like TSyringe), these would be injected.
        const portalService = new PortalIntegrationService_1.PortalIntegrationService();
        this.complianceEngine = new ComplianceEngineService_1.ComplianceEngineService(portalService);
        this.scoringService = new ScoringService_1.ScoringService();
    }
    getBidById = async (req, res) => {
        const { id } = req.params;
        try {
            const bid = await prisma_1.default.bid.findUnique({
                where: { id: id },
                include: {
                    tender: true,
                    bidder: true,
                    verificationChecks: true,
                    documents: true,
                }
            });
            if (!bid) {
                return this.handleError(new Error('Bid not found'), res, 'Bid not found', 404);
            }
            this.handleSuccess(res, { bid });
        }
        catch (error) {
            console.error('Error fetching bid details:', error);
            this.handleError(error, res, 'Failed to fetch bid details');
        }
    };
    submitDecision = async (req, res) => {
        const { id } = req.params;
        const { decision, comments } = req.body;
        try {
            const bid = await prisma_1.default.bid.update({
                where: { id: id },
                data: {
                    po_decision: decision,
                    po_comments: comments,
                    status: decision === 'APPROVED' ? 'ACCEPTED' : 'REJECTED'
                }
            });
            // Log action to audit service
            await AuditService_1.auditService.logAction({
                action: `PO_DECISION_${decision}`,
                user_email: req.user?.email || 'SYSTEM',
                target: `Bid: ${id}`,
                status: 'SUCCESS',
                details: { comments, decision, tender_id: bid.tender_id }
            });
            this.handleSuccess(res, { bid, message: 'Decision submitted successfully' });
        }
        catch (error) {
            console.error('Error submitting PO decision:', error);
            this.handleError(error, res, 'Failed to submit PO decision');
        }
    };
    ingestBid = async (req, res) => {
        const { tenderId, bidder, documents } = req.body;
        // 1. Cross-validate bidder data via Portals
        const verificationResults = await this.complianceEngine.crossValidateBidder(bidder);
        // 2. Calculate score and risk
        const scoringResult = await this.scoringService.calculateScoreAndRisk(verificationResults);
        // 3. Save to database using Prisma
        try {
            // Upsert bidder first
            const savedBidder = await prisma_1.default.bidder.upsert({
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
            const savedBid = await prisma_1.default.bid.create({
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
            await AuditService_1.auditService.logAction({
                action: 'BID_INGESTED',
                user_email: req.user?.email || 'SYSTEM',
                target: `Bid: ${savedBid.id}`,
                status: 'SUCCESS',
                details: { bidder, complianceScore: scoringResult.score, riskLevel: scoringResult.riskLevel, tender_id: tenderId },
            });
            this.handleSuccess(res, {
                bid: savedBid,
                verificationResults,
                scoringResult
            }, 201);
        }
        catch (error) {
            console.error('Error saving bid to DB:', error);
            this.handleError(error, res, 'Failed to ingest bid');
        }
    };
}
exports.BidController = BidController;
