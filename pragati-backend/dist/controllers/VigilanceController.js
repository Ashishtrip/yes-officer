"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getForensicIntegrity = exports.getVigilanceAnalytics = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const getVigilanceAnalytics = async (req, res) => {
    try {
        const flags = await prisma_1.default.vigilanceFlag.findMany({
            include: {
                bid: {
                    include: {
                        bidder: true,
                        tender: true,
                    }
                }
            },
            orderBy: {
                detected_at: 'desc'
            }
        });
        res.json({
            success: true,
            data: flags
        });
    }
    catch (error) {
        console.error('Error fetching vigilance analytics:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};
exports.getVigilanceAnalytics = getVigilanceAnalytics;
const getForensicIntegrity = async (req, res) => {
    try {
        const flags = await prisma_1.default.vigilanceFlag.findMany({
            where: {
                flag_type: {
                    in: ['IP_SPOOFING', 'CARTEL_RISK', 'TAX_EVASION'] // Adjust as necessary
                }
            },
            include: {
                bid: {
                    include: {
                        bidder: true,
                        tender: true,
                    }
                }
            },
            orderBy: {
                detected_at: 'desc'
            }
        });
        res.json({
            success: true,
            data: flags
        });
    }
    catch (error) {
        console.error('Error fetching forensic integrity:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};
exports.getForensicIntegrity = getForensicIntegrity;
