import {Router} from "express";
import {RegisterSchema} from "@/interfaces/http/validation/auth/RegisterSchema.js";
import {LoginSchema} from "@/interfaces/http/validation/auth/LoginSchema.js";
import {validate} from "@/interfaces/http/validation/validate.js";
import {AuthController} from "@/interfaces/http/controllers/AuthController.js";

export const authRoutes=(controller: AuthController) :Router => {
    const router = Router();

    router.post('/register',validate(RegisterSchema),controller.register.bind(controller));
    router.post('/login',validate(LoginSchema),controller.login.bind(controller));

    return router;
}
