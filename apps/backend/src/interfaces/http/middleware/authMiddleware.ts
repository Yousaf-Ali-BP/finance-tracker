import type {Request, Response, NextFunction} from 'express';
import {JwtService} from "@/infrastructure/auth/JwtService.js";
import {UnauthorizedError} from "@/application/errors/index.js";

export const authMiddleware =
    (JwtService: JwtService) =>
        (req: Request, res: Response, next: NextFunction) => {
            const authHeader = req.headers.authorization;

            if (!authHeader) {
                throw new UnauthorizedError();
            }

            const token = authHeader.split(' ')[1];

            if (!token) {
                throw new UnauthorizedError();
            }

            try{
                req.user =JwtService.verify(token)
                return next()
            }catch (err){
                return next(err);
            }
        }


