import type {Request, Response, NextFunction} from 'express';
import {JwtService} from "../../../infrastructure/auth/JwtService.js";

export const authMiddleware =
    (JwtService: JwtService) =>
        (req: Request, res: Response, next: NextFunction) => {
            const authHeader = req.headers.authorization;

            if (!authHeader) {
                return res.status(401).json({message: 'Unauthorized'});
            }

            const token = authHeader.split(' ')[1];

            if (!token) {
                return res.status(401).json({ message: 'No token provided' });
            }

            try{
                req.user =JwtService.verify(token)
                return next()
            }catch {
                return res.status(401).json({message: 'Invalid token'});
            }
        }



