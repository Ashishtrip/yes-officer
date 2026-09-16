"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
// import * as Sentry from '@sentry/node'; // Assuming Sentry is added later
class BaseController {
    handleSuccess(res, data, statusCode = 200) {
        res.status(statusCode).json({
            success: true,
            data,
        });
    }
    handleError(error, res, context, statusCode = 400) {
        console.error(`Error in ${context}:`, error);
        // Sentry.captureException(error);
        if (error instanceof Error) {
            res.status(statusCode).json({
                success: false,
                error: error.message,
            });
        }
        else {
            res.status(500).json({
                success: false,
                error: 'Internal Server Error',
            });
        }
    }
}
exports.BaseController = BaseController;
