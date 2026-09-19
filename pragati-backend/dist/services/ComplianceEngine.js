"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.complianceEngine = exports.ComplianceEngine = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
class ComplianceEngine {
    /**
     * Evaluates all verifications for a bid and assigns a compliance score and risk level.
     */
    async evaluateBid(bidId) {
        console.log(`[ComplianceEngine] Evaluating Bid: ${bidId}`);
        const bid = await prisma_1.default.bid.findUnique({
            where: { id: bidId },
            include: {
                verificationChecks: true,
                documents: true,
                tender: true
            }
        });
        if (!bid) {
            throw new Error(`Bid ${bidId} not found`);
        }
        // 1. Calculate base score from portal verification checks
        let totalScore = 0;
        const maxScore = 100;
        let matchCount = 0;
        // Simple rule-based scoring: 
        // Each verification check has a base weight. For MVP, we assign equal weight to each.
        const checksCount = bid.verificationChecks.length || 1;
        const pointsPerCheck = maxScore / checksCount;
        for (const check of bid.verificationChecks) {
            if (check.match_result === 'MATCH') {
                totalScore += pointsPerCheck;
                matchCount++;
            }
            else if (check.match_result === 'MISMATCH') {
                // Penalty for mismatch
                totalScore -= pointsPerCheck * 0.5;
            }
        }
        // Ensure score is within 0-100 bounds
        totalScore = Math.max(0, Math.min(maxScore, totalScore));
        // 2. Determine Risk Level
        let riskLevel = 'HIGH';
        if (totalScore >= 80) {
            riskLevel = 'LOW';
        }
        else if (totalScore >= 50) {
            riskLevel = 'MEDIUM';
        }
        // 3. Generate AI Recommendation
        const { recommendationService } = await Promise.resolve().then(() => __importStar(require('./RecommendationService')));
        const recommendation = await recommendationService.generateRecommendation(totalScore, riskLevel, matchCount === checksCount ? 0 : checksCount - matchCount, // approx mismatch
        checksCount - matchCount // approx failures for now
        );
        // 4. Update Bid with Score, Risk Level, and Recommendation
        await prisma_1.default.bid.update({
            where: { id: bidId },
            data: {
                compliance_score: totalScore,
                risk_level: riskLevel,
                status: riskLevel === 'HIGH' ? 'REJECTED' : 'EVALUATED',
                ai_recommendation: recommendation
            }
        });
        console.log(`[ComplianceEngine] Bid ${bidId} scored ${totalScore} with risk ${riskLevel}`);
        return {
            score: totalScore,
            riskLevel,
            matchCount,
            totalChecks: checksCount
        };
    }
}
exports.ComplianceEngine = ComplianceEngine;
exports.complianceEngine = new ComplianceEngine();
