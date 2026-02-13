import {Router} from "express";
import {AuthController} from "@/interfaces/http/controllers/AuthController.js";

export const authRoutes=(controller: AuthController) :Router => {
    const router = Router();

    router.post('/register',controller.register.bind(controller));
    router.post('/login',controller.login.bind(controller));

    return router;
}
