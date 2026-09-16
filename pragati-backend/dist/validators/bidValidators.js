"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingestBidSchema = void 0;
const zod_1 = require("zod");
exports.ingestBidSchema = zod_1.z.object({
    body: zod_1.z.object({
        tenderId: zod_1.z.string().min(1, 'Tender ID is required'),
        bidder: zod_1.z.object({
            entityName: zod_1.z.string().min(1, 'Entity Name is required'),
            pan: zod_1.z.string().length(10, 'PAN must be exactly 10 characters'),
            gstin: zod_1.z.string().length(15, 'GSTIN must be exactly 15 characters').optional(),
            udyamNumber: zod_1.z.string().optional(),
            gemSellerId: zod_1.z.string().min(1, 'GeM Seller ID is required'),
            entityType: zod_1.z.string().min(1, 'Entity Type is required')
        }),
        documents: zod_1.z.array(zod_1.z.object({
            documentType: zod_1.z.string().min(1),
            filePath: zod_1.z.string().url('Must be a valid URL/Path')
        })).optional()
    })
});
