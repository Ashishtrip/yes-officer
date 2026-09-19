"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyGem = verifyGem;
const axios_1 = __importDefault(require("axios"));
async function verifyGem(sellerId) {
    const apiKey = process.env.GEM_API_KEY;
    const apiUrl = process.env.GEM_API_URL || 'https://sandbox.api.gem.gov.in/verify';
    if (!apiKey) {
        console.warn("[GEM] Missing API Key. Using mock response.");
        return {
            seller_id: sellerId,
            status: "Active",
            rating: 4.5,
            assessment_status: "Verified"
        };
    }
    const response = await axios_1.default.post(apiUrl, { seller_id: sellerId }, {
        headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    return response.data;
}
