import { verifyUdyam, UdyamData } from '../adapters/udyamAdapter';
import { verifyGstn, GstnData } from '../adapters/gstnAdapter';
import { verifyPan, PanData } from '../adapters/panAdapter';
import { verifyGem, GemData } from '../adapters/gemAdapter';
import prisma from '../utils/prisma';

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

  private async recordCheck(bidId: string, checkType: string, portalSource: string, status: string, submittedValue: any, verifiedValue: any) {
    if (!bidId) return;
    await prisma.verificationCheck.create({
      data: {
        bid_id: bidId,
        check_type: checkType,
        portal_source: portalSource,
        status: status,
        submitted_value: submittedValue,
        verified_value: verifiedValue,
        match_result: status === 'VERIFIED' ? 'MATCH' : 'MISMATCH'
      }
    });
  }

  public async verifyUdyam(udyamNumber: string, bidId?: string): Promise<UdyamData | null> {
    try {
      console.log(`[Portal Integration] Verifying Udyam: ${udyamNumber}`);
      const data = await this.withRetry(() => verifyUdyam(udyamNumber), 2);
      if (bidId) await this.recordCheck(bidId, 'UDYAM_VERIFICATION', 'UDYAM_PORTAL', 'VERIFIED', { udyam_number: udyamNumber }, data);
      return data;
    } catch (error: any) {
      console.error('[Portal Integration] Error verifying Udyam:', error.message);
      if (bidId) await this.recordCheck(bidId, 'UDYAM_VERIFICATION', 'UDYAM_PORTAL', 'ERROR', { udyam_number: udyamNumber }, { error: error.message });
      throw new Error(`Udyam Portal Verification Failed: ${error.message}`);
    }
  }

  public async verifyGstn(gstin: string, bidId?: string): Promise<GstnData | null> {
    try {
      console.log(`[Portal Integration] Verifying GSTN: ${gstin}`);
      const data = await this.withRetry(() => verifyGstn(gstin), 2);
      if (bidId) await this.recordCheck(bidId, 'GSTIN_VERIFICATION', 'GSTN_PORTAL', 'VERIFIED', { gstin }, data);
      return data;
    } catch (error: any) {
      console.error('[Portal Integration] Error verifying GSTN:', error.message);
      if (bidId) await this.recordCheck(bidId, 'GSTIN_VERIFICATION', 'GSTN_PORTAL', 'ERROR', { gstin }, { error: error.message });
      throw new Error(`GSTN Portal Verification Failed: ${error.message}`);
    }
  }

  public async verifyPan(pan: string, bidId?: string): Promise<PanData | null> {
    try {
      console.log(`[Portal Integration] Verifying PAN: ${pan}`);
      const data = await this.withRetry(() => verifyPan(pan), 2);
      if (bidId) await this.recordCheck(bidId, 'PAN_VERIFICATION', 'NSDL_PORTAL', 'VERIFIED', { pan }, data);
      return data;
    } catch (error: any) {
      console.error('[Portal Integration] Error verifying PAN:', error.message);
      if (bidId) await this.recordCheck(bidId, 'PAN_VERIFICATION', 'NSDL_PORTAL', 'ERROR', { pan }, { error: error.message });
      throw new Error(`PAN Verification Failed: ${error.message}`);
    }
  }

  public async verifyGem(sellerId: string, bidId?: string): Promise<GemData | null> {
    try {
      console.log(`[Portal Integration] Verifying GEM: ${sellerId}`);
      const data = await this.withRetry(() => verifyGem(sellerId), 2);
      if (bidId) await this.recordCheck(bidId, 'GEM_VERIFICATION', 'GEM_PORTAL', 'VERIFIED', { seller_id: sellerId }, data);
      return data;
    } catch (error: any) {
      console.error('[Portal Integration] Error verifying GEM:', error.message);
      if (bidId) await this.recordCheck(bidId, 'GEM_VERIFICATION', 'GEM_PORTAL', 'ERROR', { seller_id: sellerId }, { error: error.message });
      throw new Error(`GEM Verification Failed: ${error.message}`);
    }
  }
}
