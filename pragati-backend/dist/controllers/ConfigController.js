"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortalConnectors = exports.getComplianceRules = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const getComplianceRules = async (req, res) => {
    try {
        const rules = await prisma_1.default.complianceRule.findMany({
            orderBy: {
                created_at: 'asc'
            }
        });
        res.json({
            success: true,
            data: rules
        });
    }
    catch (error) {
        console.error('Error fetching compliance rules:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};
exports.getComplianceRules = getComplianceRules;
const getPortalConnectors = async (req, res) => {
    try {
        const connectors = await prisma_1.default.portalConnector.findMany({
            orderBy: {
                created_at: 'asc'
            }
        });
        res.json({
            success: true,
            data: connectors
        });
    }
    catch (error) {
        console.error('Error fetching portal connectors:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};
exports.getPortalConnectors = getPortalConnectors;
