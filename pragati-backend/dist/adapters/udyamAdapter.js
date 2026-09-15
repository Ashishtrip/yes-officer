"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUdyam = void 0;
const axios_1 = __importDefault(require("axios"));
const verifyUdyam = async (udyamNumber) => {
    const apiUrl = process.env.VERIFICATION_API_URL || 'https://sandbox.apisetu.gov.in/api/v1';
    const apiKey = process.env.VERIFICATION_API_KEY;
    if (!apiKey || apiKey === 'your_api_key_here') {
        console.warn('⚠️ No VERIFICATION_API_KEY provided. Simulating Udyam API response.');
        // Fallback simulation if no API key is provided
        if (udyamNumber.startsWith('UDYAM-')) {
            return {
                udyamNumber,
                enterpriseName: 'Simulated Enterprise Pvt Ltd',
                organizationType: 'Private Limited Company',
                majorActivity: 'Manufacturing',
                enterpriseType: 'Small',
                dateOfRegistration: '2020-05-10',
                status: 'Active',
            };
        }
        return null;
    }
    // Real API implementation
    const response = await axios_1.default.post(`${apiUrl}/udyam/verify`, { udyamRegistrationNumber: udyamNumber }, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': apiKey,
        },
        timeout: 10000, // 10 second timeout per PRD
    });
    const data = response.data;
    if (!data || !data.enterpriseName) {
        return null;
    }
    return {
        udyamNumber: data.udyamRegistrationNumber || udyamNumber,
        enterpriseName: data.enterpriseName,
        organizationType: data.organizationType || 'Unknown',
        majorActivity: data.majorActivity || 'Unknown',
        enterpriseType: data.enterpriseType || 'Micro',
        dateOfRegistration: data.dateOfRegistration || new Date().toISOString().split('T')[0],
        status: data.status === 'ACTIVE' ? 'Active' : 'Inactive',
    };
};
exports.verifyUdyam = verifyUdyam;
