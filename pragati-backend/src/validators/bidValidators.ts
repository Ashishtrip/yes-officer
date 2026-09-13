import { z } from 'zod';

export const ingestBidSchema = z.object({
  body: z.object({
    tenderId: z.string().min(1, 'Tender ID is required'),
    bidder: z.object({
      entityName: z.string().min(1, 'Entity Name is required'),
      pan: z.string().length(10, 'PAN must be exactly 10 characters'),
      gstin: z.string().length(15, 'GSTIN must be exactly 15 characters').optional(),
      udyamNumber: z.string().optional(),
      gemSellerId: z.string().min(1, 'GeM Seller ID is required'),
      entityType: z.string().min(1, 'Entity Type is required')
    }),
    documents: z.array(z.object({
      documentType: z.string().min(1),
      filePath: z.string().url('Must be a valid URL/Path')
    })).optional()
  })
});
