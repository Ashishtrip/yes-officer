"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderController = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const BaseController_1 = require("./BaseController");
class TenderController extends BaseController_1.BaseController {
    getTenders = async (req, res) => {
        try {
            const tenders = await prisma_1.default.tender.findMany({
                include: {
                    _count: {
                        select: { bids: true }
                    }
                },
                orderBy: { created_at: 'desc' }
            });
            this.handleSuccess(res, { tenders });
        }
        catch (error) {
            console.error('Error fetching tenders:', error);
            this.handleError(error, res, 'Failed to fetch tenders');
        }
    };
    getTenderById = async (req, res) => {
        const { id } = req.params;
        try {
            const tender = await prisma_1.default.tender.findUnique({
                where: { id: id },
                include: {
                    bids: {
                        include: {
                            bidder: true,
                            verificationChecks: true
                        }
                    }
                }
            });
            if (!tender) {
                return this.handleError(new Error('Tender not found'), res, 'Tender not found', 404);
            }
            this.handleSuccess(res, { tender });
        }
        catch (error) {
            console.error('Error fetching tender details:', error);
            this.handleError(error, res, 'Failed to fetch tender details');
        }
    };
}
exports.TenderController = TenderController;
