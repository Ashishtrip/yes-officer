"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderController = void 0;
const client_1 = require("@prisma/client");
const BaseController_1 = require("./BaseController");
const prisma = new client_1.PrismaClient();
class TenderController extends BaseController_1.BaseController {
    getTenders = async (req, res) => {
        try {
            const tenders = await prisma.tender.findMany({
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
            const tender = await prisma.tender.findUnique({
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
