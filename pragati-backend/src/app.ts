import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app: Express = express();

// Global middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup routes
import authRoutes from './routes/authRoutes';
import { bidRoutes } from './routes/bidRoutes';
import documentRoutes from './routes/documentRoutes';

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/bids', bidRoutes);
app.use('/api/v1/documents', documentRoutes);

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Unhandled error:', err);
  // Sentry.captureException(err);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
});

export default app;
