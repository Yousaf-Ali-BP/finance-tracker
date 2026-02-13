import type {Request, Response, NextFunction} from 'express';
import {AppError} from "@/application/errors/index.js";

export function errorHandler (err:unknown, req: Request, res: Response, next: NextFunction) {
    // Known application errors
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            error: {
                code: err.statusCode,
                message: err.message,
            }
        })
    }

    // Unknown / unexpected errors
    console.log('Unexpected error occurred : ',err);

    return res.status(500).json({
        success: false,
        error: {
            code:'INTERNAL_SERVER_ERROR',
            message:'Internal Server Error',
        }
    })
}