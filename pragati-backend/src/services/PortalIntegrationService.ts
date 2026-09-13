import { mockUdyamVerify, UdyamData } from '../adapters/mockUdyamAdapter';
import { mockGstnVerify, GstnData } from '../adapters/mockGstnAdapter';

export class PortalIntegrationService {
  public async verifyUdyam(udyamNumber: string): Promise<UdyamData | null> {
    try {
      // Here we would normally implement circuit breaker, caching, and rate limiting
      return await mockUdyamVerify(udyamNumber);
    } catch (error) {
      console.error('Error verifying Udyam:', error);
      throw new Error('Udyam Portal Verification Failed');
    }
  }

  public async verifyGstn(gstin: string): Promise<GstnData | null> {
    try {
      return await mockGstnVerify(gstin);
    } catch (error) {
      console.error('Error verifying GSTN:', error);
      throw new Error('GSTN Portal Verification Failed');
    }
  }

  // Future adapters: PAN, EPFO, ESIC, etc.
}
