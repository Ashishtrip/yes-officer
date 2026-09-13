import { VerificationResult } from './ComplianceEngineService';
import { recommendationService } from './RecommendationService';
export interface ScoringResult {
  score: number;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  recommendation: string;
}

export class ScoringService {
  public async calculateScoreAndRisk(verificationResults: VerificationResult[]): Promise<ScoringResult> {
    let score = 100;
    const mismatchDeduction = 15;
    const failureDeduction = 40;

    let mismatchCount = 0;
    let failureCount = 0;

    for (const result of verificationResults) {
      if (result.status === 'MISMATCH') {
        score -= mismatchDeduction;
        mismatchCount++;
      } else if (result.status === 'FAILED') {
        score -= failureDeduction;
        failureCount++;
      }
    }

    // Ensure score doesn't drop below 0
    score = Math.max(0, score);

    let riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    if (score >= 80) riskLevel = 'LOW';
    else if (score >= 60) riskLevel = 'MEDIUM';
    else if (score >= 40) riskLevel = 'HIGH';
    else riskLevel = 'CRITICAL';

    const recommendation = await recommendationService.generateRecommendation(
      score,
      riskLevel,
      mismatchCount,
      failureCount
    );

    return {
      score,
      riskLevel,
      recommendation,
    };
  }
}
