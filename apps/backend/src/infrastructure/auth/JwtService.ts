import jwt from 'jsonwebtoken';
import type {TokenService} from '@/application/services/TokenService.js';
import {InternalServerError, InvalidTokenError, TokenExpiredError,} from '@/application/errors/index.js';

export class JwtService implements TokenService {
    generateToken(userId: string): string {
        const secret = process.env.JWT_SECRET;

        if (!secret) {
            throw new InternalServerError();
        }

        try {
            const payload = {
                sub: userId,
                iat: Math.floor(Date.now() / 1000),
            };

            return jwt.sign(payload, secret, {
                expiresIn: '1h',
                algorithm: 'HS256',
            });
        } catch {
            throw new InternalServerError();
        }
    }

    verify(token: string): { sub: string } {
        const secret = process.env.JWT_SECRET;

        if (!secret) {
            throw new InternalServerError();
        }

        try {
            return jwt.verify(token, secret) as { sub: string };
        } catch (error) {
            if (error instanceof Error && error.name === 'TokenExpiredError') {
                throw new TokenExpiredError();
            }

            if (error instanceof Error && (error.name === 'JsonWebTokenError' || error.name === 'NotBeforeError')) {
                throw new InvalidTokenError();
            }

            throw new InternalServerError();
        }
    }
}
