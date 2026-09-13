import { verifyUdyam, UdyamData } from '../adapters/udyamAdapter';
import { verifyGstn, GstnData } from '../adapters/gstnAdapter';

export class PortalIntegrationService {
  /**
   * Helper method to implement a basic retry mechanism
   */
  private async withRetry<T>(operation: () => Promise<T>, retries: number = 2): Promise<T> {
    try {
      return await operation();
    } catch (error: any) {
      if (retries > 0) {
        console.warn(`Operation failed, retrying... (${retries} retries left) Error: ${error.message}`);
        // Exponential backoff or simple delay
        await new Promise(res => setTimeout(res, 1000));
        return this.withRetry(operation, retries - 1);
      }
      throw error;
    }
  }

  public async verifyUdyam(udyamNumber: string): Promise<UdyamData | null> {
    try {
      console.log(`[Portal Integration] Verifying Udyam: ${udyamNumber}`);
      return await this.withRetry(() => verifyUdyam(udyamNumber), 2);
    } catch (error: any) {
      console.error('[Portal Integration] Error verifying Udyam:', error.message);
      // Depending on requirements, we might want to throw or return null
      throw new Error(`Udyam Portal Verification Failed: ${error.message}`);
    }
  }

  public async verifyGstn(gstin: string): Promise<GstnData | null> {
    try {
      console.log(`[Portal Integration] Verifying GSTN: ${gstin}`);
      return await this.withRetry(() => verifyGstn(gstin), 2);
    } catch (error: any) {
      console.error('[Portal Integration] Error verifying GSTN:', error.message);
      throw new Error(`GSTN Portal Verification Failed: ${error.message}`);
    }
  }

  // Future adapters: PAN, EPFO, ESIC, etc.
}
