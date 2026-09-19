"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalIntegrationService = void 0;
const udyamAdapter_1 = require("../adapters/udyamAdapter");
const gstnAdapter_1 = require("../adapters/gstnAdapter");
const panAdapter_1 = require("../adapters/panAdapter");
const gemAdapter_1 = require("../adapters/gemAdapter");
const prisma_1 = __importDefault(require("../utils/prisma"));
class PortalIntegrationService {
    /**
     * Helper method to implement a basic retry mechanism
     */
    async withRetry(operation, retries = 2) {
        try {
            return await operation();
        }
        catch (error) {
            if (retries > 0) {
                console.warn(`Operation failed, retrying... (${retries} retries left) Error: ${error.message}`);
                // Exponential backoff or simple delay
                await new Promise(res => setTimeout(res, 1000));
                return this.withRetry(operation, retries - 1);
            }
            throw error;
        }
    }
    async recordCheck(bidId, checkType, portalSource, status, submittedValue, verifiedValue) {
        if (!bidId)
            return;
        await prisma_1.default.verificationCheck.create({
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
    async verifyUdyam(udyamNumber, bidId) {
        try {
            console.log(`[Portal Integration] Verifying Udyam: ${udyamNumber}`);
            const data = await this.withRetry(() => (0, udyamAdapter_1.verifyUdyam)(udyamNumber), 2);
            if (bidId)
                await this.recordCheck(bidId, 'UDYAM_VERIFICATION', 'UDYAM_PORTAL', 'VERIFIED', { udyam_number: udyamNumber }, data);
            return data;
        }
        catch (error) {
            console.error('[Portal Integration] Error verifying Udyam:', error.message);
            if (bidId)
                await this.recordCheck(bidId, 'UDYAM_VERIFICATION', 'UDYAM_PORTAL', 'ERROR', { udyam_number: udyamNumber }, { error: error.message });
            throw new Error(`Udyam Portal Verification Failed: ${error.message}`);
        }
    }
    async verifyGstn(gstin, bidId) {
        try {
            console.log(`[Portal Integration] Verifying GSTN: ${gstin}`);
            const data = await this.withRetry(() => (0, gstnAdapter_1.verifyGstn)(gstin), 2);
            if (bidId)
                await this.recordCheck(bidId, 'GSTIN_VERIFICATION', 'GSTN_PORTAL', 'VERIFIED', { gstin }, data);
            return data;
        }
        catch (error) {
            console.error('[Portal Integration] Error verifying GSTN:', error.message);
            if (bidId)
                await this.recordCheck(bidId, 'GSTIN_VERIFICATION', 'GSTN_PORTAL', 'ERROR', { gstin }, { error: error.message });
            throw new Error(`GSTN Portal Verification Failed: ${error.message}`);
        }
    }
    async verifyPan(pan, bidId) {
        try {
            console.log(`[Portal Integration] Verifying PAN: ${pan}`);
            const data = await this.withRetry(() => (0, panAdapter_1.verifyPan)(pan), 2);
            if (bidId)
                await this.recordCheck(bidId, 'PAN_VERIFICATION', 'NSDL_PORTAL', 'VERIFIED', { pan }, data);
            return data;
        }
        catch (error) {
            console.error('[Portal Integration] Error verifying PAN:', error.message);
            if (bidId)
                await this.recordCheck(bidId, 'PAN_VERIFICATION', 'NSDL_PORTAL', 'ERROR', { pan }, { error: error.message });
            throw new Error(`PAN Verification Failed: ${error.message}`);
        }
    }
    async verifyGem(sellerId, bidId) {
        try {
            console.log(`[Portal Integration] Verifying GEM: ${sellerId}`);
            const data = await this.withRetry(() => (0, gemAdapter_1.verifyGem)(sellerId), 2);
            if (bidId)
                await this.recordCheck(bidId, 'GEM_VERIFICATION', 'GEM_PORTAL', 'VERIFIED', { seller_id: sellerId }, data);
            return data;
        }
        catch (error) {
            console.error('[Portal Integration] Error verifying GEM:', error.message);
            if (bidId)
                await this.recordCheck(bidId, 'GEM_VERIFICATION', 'GEM_PORTAL', 'ERROR', { seller_id: sellerId }, { error: error.message });
            throw new Error(`GEM Verification Failed: ${error.message}`);
        }
    }
}
exports.PortalIntegrationService = PortalIntegrationService;
