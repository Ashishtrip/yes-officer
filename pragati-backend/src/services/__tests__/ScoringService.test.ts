import { ScoringService } from './ScoringService';
import { recommendationService } from './RecommendationService';
import { VerificationResult } from './ComplianceEngineService';

jest.mock('./RecommendationService', () => ({
  recommendationService: {
    generateRecommendation: jest.fn(),
  },
}));

describe('ScoringService', () => {
  let scoringService: ScoringService;

  beforeEach(() => {
    scoringService = new ScoringService();
    jest.clearAllMocks();
  });

  it('should return score 100 and LOW risk for all MATCH results', async () => {
    (recommendationService.generateRecommendation as jest.Mock).mockResolvedValue('All good');

    const results: VerificationResult[] = [
      { checkType: 'PAN', status: 'MATCH', matchedValue: 'ABCDE1234F' } as VerificationResult,
      { checkType: 'GSTIN', status: 'MATCH', matchedValue: '22ABCDE1234F1Z5' } as VerificationResult,
    ];

    const result = await scoringService.calculateScoreAndRisk(results);

    expect(result.score).toBe(100);
    expect(result.riskLevel).toBe('LOW');
    expect(result.recommendation).toBe('All good');
    expect(recommendationService.generateRecommendation).toHaveBeenCalledWith(100, 'LOW', 0, 0);
  });

  it('should deduct 15 points for MISMATCH and return MEDIUM risk if score drops below 80', async () => {
    (recommendationService.generateRecommendation as jest.Mock).mockResolvedValue('Review needed');

    const results: VerificationResult[] = [
      { checkType: 'PAN', status: 'MISMATCH', matchedValue: 'ABCDE1234F' } as VerificationResult,
      { checkType: 'GSTIN', status: 'MISMATCH', matchedValue: '22ABCDE1234F1Z5' } as VerificationResult,
    ]; // 100 - 15 - 15 = 70

    const result = await scoringService.calculateScoreAndRisk(results);

    expect(result.score).toBe(70);
    expect(result.riskLevel).toBe('MEDIUM');
    expect(result.recommendation).toBe('Review needed');
    expect(recommendationService.generateRecommendation).toHaveBeenCalledWith(70, 'MEDIUM', 2, 0);
  });

  it('should deduct 40 points for FAILED and set HIGH risk', async () => {
    (recommendationService.generateRecommendation as jest.Mock).mockResolvedValue('High risk');

    const results: VerificationResult[] = [
      { checkType: 'PAN', status: 'FAILED' } as VerificationResult,
      { checkType: 'GSTIN', status: 'FAILED' } as VerificationResult,
    ]; // 100 - 40 - 40 = 20

    const result = await scoringService.calculateScoreAndRisk(results);

    expect(result.score).toBe(20);
    expect(result.riskLevel).toBe('CRITICAL'); // < 40 is CRITICAL
    expect(result.recommendation).toBe('High risk');
    expect(recommendationService.generateRecommendation).toHaveBeenCalledWith(20, 'CRITICAL', 0, 2);
  });

  it('should not let score drop below 0', async () => {
    (recommendationService.generateRecommendation as jest.Mock).mockResolvedValue('Critical failure');

    const results: VerificationResult[] = [
      { checkType: 'PAN', status: 'FAILED' } as VerificationResult,
      { checkType: 'GSTIN', status: 'FAILED' } as VerificationResult,
      { checkType: 'UDYAM', status: 'FAILED' } as VerificationResult,
    ]; // 100 - 120 = -20 -> 0

    const result = await scoringService.calculateScoreAndRisk(results);

    expect(result.score).toBe(0);
    expect(result.riskLevel).toBe('CRITICAL');
  });
});
