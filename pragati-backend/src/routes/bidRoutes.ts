import { Router } from 'express';
import { BidController } from '../controllers/BidController';
import { validateRequest } from '../middlewares/validateRequest';
import { ingestBidSchema } from '../validators/bidValidators';
import { asyncErrorWrapper } from '../utils/asyncErrorWrapper';

const router = Router();
const bidController = new BidController();

router.post(
  '/ingest',
  validateRequest(ingestBidSchema),
  asyncErrorWrapper(bidController.ingestBid)
);

export { router as bidRoutes };
