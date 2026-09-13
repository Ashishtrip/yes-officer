import { VerificationResult } from './ComplianceEngineService';

export interface ScoringResult {
  score: number;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  recommendation: string;
}

export class ScoringService {
  public calculateScoreAndRisk(verificationResults: VerificationResult[]): ScoringResult {
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

    // AI Recommendation (Mocked for now)
    let recommendation = '';
    if (riskLevel === 'LOW') {
      recommendation = 'Bidder demonstrates high compliance. All major checks passed.';
    } else if (riskLevel === 'MEDIUM') {
      recommendation = `Bidder has ${mismatchCount} mismatches. Recommend manual review of discrepancies.`;
    } else {
      recommendation = `Critical compliance failures detected (${failureCount} failures, ${mismatchCount} mismatches). Proceed with caution or disqualify.`;
    }

    return {
      score,
      riskLevel,
      recommendation,
    };
  }
}
