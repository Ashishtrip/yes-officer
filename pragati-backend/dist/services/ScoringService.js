"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoringService = void 0;
const RecommendationService_1 = require("./RecommendationService");
class ScoringService {
    async calculateScoreAndRisk(verificationResults) {
        let score = 100;
        const mismatchDeduction = 15;
        const failureDeduction = 40;
        let mismatchCount = 0;
        let failureCount = 0;
        for (const result of verificationResults) {
            if (result.status === 'MISMATCH') {
                score -= mismatchDeduction;
                mismatchCount++;
            }
            else if (result.status === 'FAILED') {
                score -= failureDeduction;
                failureCount++;
            }
        }
        // Ensure score doesn't drop below 0
        score = Math.max(0, score);
        let riskLevel;
        if (score >= 80)
            riskLevel = 'LOW';
        else if (score >= 60)
            riskLevel = 'MEDIUM';
        else if (score >= 40)
            riskLevel = 'HIGH';
        else
            riskLevel = 'CRITICAL';
        const recommendation = await RecommendationService_1.recommendationService.generateRecommendation(score, riskLevel, mismatchCount, failureCount);
        return {
            score,
            riskLevel,
            recommendation,
        };
    }
}
exports.ScoringService = ScoringService;
