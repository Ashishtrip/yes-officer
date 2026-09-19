"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrievances = exports.getClarifications = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const getClarifications = async (req, res) => {
    try {
        const clarifications = await prisma_1.default.clarification.findMany({
            include: {
                bid: {
                    include: {
                        bidder: true,
                        tender: true,
                    }
                }
            },
            orderBy: {
                created_at: 'desc'
            }
        });
        res.json({
            success: true,
            data: clarifications
        });
    }
    catch (error) {
        console.error('Error fetching clarifications:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};
exports.getClarifications = getClarifications;
const getGrievances = async (req, res) => {
    try {
        const grievances = await prisma_1.default.grievance.findMany({
            include: {
                bid: {
                    include: {
                        bidder: true,
                        tender: true,
                    }
                }
            },
            orderBy: {
                created_at: 'desc'
            }
        });
        res.json({
            success: true,
            data: grievances
        });
    }
    catch (error) {
        console.error('Error fetching grievances:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};
exports.getGrievances = getGrievances;
