import { Router } from 'express';
import { BidController } from '../controllers/BidController';
import { validateRequest } from '../middlewares/validateRequest';
import { ingestBidSchema } from '../validators/bidValidators';
import { asyncErrorWrapper } from '../utils/asyncErrorWrapper';
import { authenticateJWT, requireRole } from '../middlewares/authMiddleware';

const router = Router();
const bidController = new BidController();

router.post(
  '/ingest',
  authenticateJWT,
  requireRole(['PROCUREMENT_OFFICER', 'ADMIN']),
  validateRequest(ingestBidSchema),
  asyncErrorWrapper(bidController.ingestBid)
);

router.get(
  '/:id',
  authenticateJWT,
  asyncErrorWrapper(bidController.getBidById)
);

router.post(
  '/:id/decision',
  authenticateJWT,
  requireRole(['PROCUREMENT_OFFICER', 'ADMIN']),
  asyncErrorWrapper(bidController.submitDecision)
);

export { router as bidRoutes };
