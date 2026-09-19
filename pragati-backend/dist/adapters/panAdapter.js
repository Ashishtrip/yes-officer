"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPan = verifyPan;
const axios_1 = __importDefault(require("axios"));
async function verifyPan(pan) {
    const apiKey = process.env.PAN_API_KEY;
    const apiUrl = process.env.PAN_API_URL || 'https://sandbox.api.incometax.gov.in/verify';
    if (!apiKey) {
        console.warn("[PAN] Missing API Key. Using mock response.");
        return {
            pan,
            status: "Active",
            name_match: true,
            name: "Mock Enterprise"
        };
    }
    const response = await axios_1.default.post(apiUrl, { pan }, {
        headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    return response.data;
}
