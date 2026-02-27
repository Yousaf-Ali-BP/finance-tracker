import {Router} from "express";
import type {TokenService} from "@/application/services/TokenService.js";
import {RegisterSchema} from "@/interfaces/http/validation/auth/RegisterSchema.js";
import {LoginSchema} from "@/interfaces/http/validation/auth/LoginSchema.js";
import {validate} from "@/interfaces/http/validation/validate.js";
import {AuthController} from "@/interfaces/http/controllers/AuthController.js";
import {authMiddleware} from "@/interfaces/http/middleware/authMiddleware.js";

export const authRoutes=(controller: AuthController, tokenService: TokenService) :Router => {
    const router = Router();

    router.post('/register',validate(RegisterSchema),controller.register.bind(controller));
    router.post('/login',validate(LoginSchema),controller.login.bind(controller));
    router.get('/me',authMiddleware(tokenService),controller.me.bind(controller));

    return router;
}
