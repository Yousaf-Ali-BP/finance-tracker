import type {Request, Response, NextFunction} from 'express';
import type {ZodSchema} from 'zod';
import {ZodError} from 'zod';
import {zodErrorMapper} from "@/interfaces/http/validation/zodErrorMapper.js";

export const validate =
    (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body)
            next()
        } catch (err) {
            if (err instanceof ZodError){
                if (err instanceof ZodError){
                    return next(zodErrorMapper(err))
                }
                console.log(zodErrorMapper(err))
            }else console.log(err,'error normal')
        }

    }


