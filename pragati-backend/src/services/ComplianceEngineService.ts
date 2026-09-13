import { PortalIntegrationService } from './PortalIntegrationService';

export interface VerificationResult {
  checkType: string;
  portalSource: string;
  status: 'VERIFIED' | 'MISMATCH' | 'FAILED' | 'PENDING';
  submittedValue: any;
  verifiedValue: any;
  matchResult: string;
  discrepancyDetail?: string;
}

export class ComplianceEngineService {
  constructor(private readonly portalIntegrationService: PortalIntegrationService) {}

  public async crossValidateBidder(bidderData: any): Promise<VerificationResult[]> {
    const results: VerificationResult[] = [];

    // Verify Udyam
    if (bidderData.udyamNumber) {
      const udyamResult = await this.portalIntegrationService.verifyUdyam(bidderData.udyamNumber);
      if (udyamResult) {
        const isNameMatch = udyamResult.enterpriseName.toLowerCase().includes(bidderData.entityName.toLowerCase()) || 
                            bidderData.entityName.toLowerCase().includes(udyamResult.enterpriseName.toLowerCase());
        
        results.push({
          checkType: 'UDYAM_REGISTRATION',
          portalSource: 'UDYAM_PORTAL',
          status: isNameMatch ? 'VERIFIED' : 'MISMATCH',
          submittedValue: { entityName: bidderData.entityName },
          verifiedValue: { enterpriseName: udyamResult.enterpriseName },
          matchResult: isNameMatch ? 'Entity name matches' : 'Entity name mismatch',
          discrepancyDetail: isNameMatch ? undefined : `Submitted: ${bidderData.entityName}, Portal: ${udyamResult.enterpriseName}`,
        });
      } else {
        results.push({
          checkType: 'UDYAM_REGISTRATION',
          portalSource: 'UDYAM_PORTAL',
          status: 'FAILED',
          submittedValue: { udyamNumber: bidderData.udyamNumber },
          verifiedValue: null,
          matchResult: 'Udyam Number not found',
        });
      }
    }

    // Verify GSTN
    if (bidderData.gstin) {
      const gstnResult = await this.portalIntegrationService.verifyGstn(bidderData.gstin);
      if (gstnResult) {
        const isActive = gstnResult.status === 'Active';
        
        results.push({
          checkType: 'GST_STATUS',
          portalSource: 'GSTN',
          status: isActive ? 'VERIFIED' : 'FAILED',
          submittedValue: { status: 'Expected Active' },
          verifiedValue: { status: gstnResult.status },
          matchResult: isActive ? 'GST is Active' : 'GST is not Active',
        });
      } else {
        results.push({
          checkType: 'GST_STATUS',
          portalSource: 'GSTN',
          status: 'FAILED',
          submittedValue: { gstin: bidderData.gstin },
          verifiedValue: null,
          matchResult: 'GSTIN not found',
        });
      }
    }

    return results;
  }
}
