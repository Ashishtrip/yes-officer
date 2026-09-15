"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalIntegrationService = void 0;
const udyamAdapter_1 = require("../adapters/udyamAdapter");
const gstnAdapter_1 = require("../adapters/gstnAdapter");
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
    async verifyUdyam(udyamNumber) {
        try {
            console.log(`[Portal Integration] Verifying Udyam: ${udyamNumber}`);
            return await this.withRetry(() => (0, udyamAdapter_1.verifyUdyam)(udyamNumber), 2);
        }
        catch (error) {
            console.error('[Portal Integration] Error verifying Udyam:', error.message);
            // Depending on requirements, we might want to throw or return null
            throw new Error(`Udyam Portal Verification Failed: ${error.message}`);
        }
    }
    async verifyGstn(gstin) {
        try {
            console.log(`[Portal Integration] Verifying GSTN: ${gstin}`);
            return await this.withRetry(() => (0, gstnAdapter_1.verifyGstn)(gstin), 2);
        }
        catch (error) {
            console.error('[Portal Integration] Error verifying GSTN:', error.message);
            throw new Error(`GSTN Portal Verification Failed: ${error.message}`);
        }
    }
}
exports.PortalIntegrationService = PortalIntegrationService;
