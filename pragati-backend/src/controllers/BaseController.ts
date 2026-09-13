import { Response } from 'express';
// import * as Sentry from '@sentry/node'; // Assuming Sentry is added later

export abstract class BaseController {
  protected handleSuccess(res: Response, data: any, statusCode: number = 200): void {
    res.status(statusCode).json({
      success: true,
      data,
    });
  }

  protected handleError(error: unknown, res: Response, context: string, statusCode: number = 400): void {
    console.error(`Error in ${context}:`, error);
    // Sentry.captureException(error);
    
    if (error instanceof Error) {
      res.status(statusCode).json({
        success: false,
        error: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
      });
    }
  }
}
