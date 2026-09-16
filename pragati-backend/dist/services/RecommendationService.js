"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recommendationService = exports.RecommendationService = void 0;
const genai_1 = require("@google/genai");
// Initialize with environment variable GEMINI_API_KEY by default
const ai = new genai_1.GoogleGenAI();
class RecommendationService {
    async generateRecommendation(score, riskLevel, mismatchCount, failureCount) {
        const prompt = `
      You are an expert procurement and compliance officer AI assistant.
      Analyze the following bidder compliance results and provide a brief, actionable recommendation (max 3 sentences).
      
      Score: ${score}/100
      Risk Level: ${riskLevel}
      Mismatches Found: ${mismatchCount}
      Critical Failures: ${failureCount}
      
      Recommendation:
    `;
        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });
            return response.text || 'Manual review required.';
        }
        catch (error) {
            console.error('Error calling Gemini API:', error);
            // Fallback
            if (riskLevel === 'LOW')
                return 'Bidder demonstrates high compliance. All major checks passed.';
            if (riskLevel === 'MEDIUM')
                return `Bidder has ${mismatchCount} mismatches. Recommend manual review of discrepancies.`;
            return `Critical compliance failures detected (${failureCount} failures, ${mismatchCount} mismatches). Proceed with caution or disqualify.`;
        }
    }
}
exports.RecommendationService = RecommendationService;
exports.recommendationService = new RecommendationService();
