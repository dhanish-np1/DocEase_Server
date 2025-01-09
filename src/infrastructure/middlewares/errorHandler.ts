import { Request, Response, NextFunction } from 'express';

// Custom error interface
interface CustomError extends Error {
    statusCode?: number;
    code?: string;
    data?: any;
}

export function errorHandler(
    error: CustomError,
    req: Request,
    res: Response,
    next: NextFunction
): void {
    // Log error details
    console.error({
        timestamp: new Date().toISOString(),
        path: req.path,
        method: req.method,
        error: {
            name: error.name,
            message: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }
    });

    // Determine status code
    const statusCode = error.statusCode || 
        (error instanceof SyntaxError ? 400 : 500);

    // Prepare error response
    const errorResponse = {
        success: false,
        error: {
            code: error.code || error.name,
            message: error.message || 'Internal Server Error',
            ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
            ...(error.data && { details: error.data })
        },
        timestamp: new Date().toISOString(),
        path: req.originalUrl
    };

    // Send response
    res.status(statusCode).json(errorResponse);
}