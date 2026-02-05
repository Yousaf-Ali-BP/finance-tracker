import jwt from 'jsonwebtoken';
import type {TokenService} from "../../application/services/TokenService.js";

export class JwtService  implements TokenService {
    generateToken(userId: string): string {
        const secret = process.env.JWT_SECRET;

        if (!secret) {
            throw new Error("Missing JWT_SECRET");
        }

        try {
            const payload = {
                sub:userId,
                iat:Math.floor(Date.now() / 1000),
            }

            return jwt.sign(payload, secret,{
                expiresIn:'1h',
                algorithm: 'HS256',
            });
        }catch(err) {
            throw new Error("Failed to generate token");
        }
    }
}