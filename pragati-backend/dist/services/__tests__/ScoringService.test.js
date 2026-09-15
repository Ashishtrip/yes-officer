"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ScoringService_1 = require("../ScoringService");
const RecommendationService_1 = require("../RecommendationService");
jest.mock('../RecommendationService', () => ({
    recommendationService: {
        generateRecommendation: jest.fn(),
    },
}));
describe('ScoringService', () => {
    let scoringService;
    beforeEach(() => {
        scoringService = new ScoringService_1.ScoringService();
        jest.clearAllMocks();
    });
    it('should return score 100 and LOW risk for all MATCH results', async () => {
        RecommendationService_1.recommendationService.generateRecommendation.mockResolvedValue('All good');
        const results = [
            { checkType: 'PAN', status: 'MATCH', matchedValue: 'ABCDE1234F' },
            { checkType: 'GSTIN', status: 'MATCH', matchedValue: '22ABCDE1234F1Z5' },
        ];
        const result = await scoringService.calculateScoreAndRisk(results);
        expect(result.score).toBe(100);
        expect(result.riskLevel).toBe('LOW');
        expect(result.recommendation).toBe('All good');
        expect(RecommendationService_1.recommendationService.generateRecommendation).toHaveBeenCalledWith(100, 'LOW', 0, 0);
    });
    it('should deduct 15 points for MISMATCH and return MEDIUM risk if score drops below 80', async () => {
        RecommendationService_1.recommendationService.generateRecommendation.mockResolvedValue('Review needed');
        const results = [
            { checkType: 'PAN', status: 'MISMATCH', matchedValue: 'ABCDE1234F' },
            { checkType: 'GSTIN', status: 'MISMATCH', matchedValue: '22ABCDE1234F1Z5' },
        ]; // 100 - 15 - 15 = 70
        const result = await scoringService.calculateScoreAndRisk(results);
        expect(result.score).toBe(70);
        expect(result.riskLevel).toBe('MEDIUM');
        expect(result.recommendation).toBe('Review needed');
        expect(RecommendationService_1.recommendationService.generateRecommendation).toHaveBeenCalledWith(70, 'MEDIUM', 2, 0);
    });
    it('should deduct 40 points for FAILED and set HIGH risk', async () => {
        RecommendationService_1.recommendationService.generateRecommendation.mockResolvedValue('High risk');
        const results = [
            { checkType: 'PAN', status: 'FAILED' },
            { checkType: 'GSTIN', status: 'FAILED' },
        ]; // 100 - 40 - 40 = 20
        const result = await scoringService.calculateScoreAndRisk(results);
        expect(result.score).toBe(20);
        expect(result.riskLevel).toBe('CRITICAL'); // < 40 is CRITICAL
        expect(result.recommendation).toBe('High risk');
        expect(RecommendationService_1.recommendationService.generateRecommendation).toHaveBeenCalledWith(20, 'CRITICAL', 0, 2);
    });
    it('should not let score drop below 0', async () => {
        RecommendationService_1.recommendationService.generateRecommendation.mockResolvedValue('Critical failure');
        const results = [
            { checkType: 'PAN', status: 'FAILED' },
            { checkType: 'GSTIN', status: 'FAILED' },
            { checkType: 'UDYAM', status: 'FAILED' },
        ]; // 100 - 120 = -20 -> 0
        const result = await scoringService.calculateScoreAndRisk(results);
        expect(result.score).toBe(0);
        expect(result.riskLevel).toBe('CRITICAL');
    });
});
