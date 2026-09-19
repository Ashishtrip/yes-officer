import prisma from '../utils/prisma';

export class ComplianceEngine {
  /**
   * Evaluates all verifications for a bid and assigns a compliance score and risk level.
   */
  async evaluateBid(bidId: string) {
    console.log(`[ComplianceEngine] Evaluating Bid: ${bidId}`);

    const bid = await prisma.bid.findUnique({
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
      } else if (check.match_result === 'MISMATCH') {
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
    } else if (totalScore >= 50) {
      riskLevel = 'MEDIUM';
    }

    // 3. Generate AI Recommendation
    const { recommendationService } = await import('./RecommendationService');
    const recommendation = await recommendationService.generateRecommendation(
      totalScore,
      riskLevel,
      matchCount === checksCount ? 0 : checksCount - matchCount, // approx mismatch
      checksCount - matchCount // approx failures for now
    );

    // 4. Update Bid with Score, Risk Level, and Recommendation
    await prisma.bid.update({
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

export const complianceEngine = new ComplianceEngine();
