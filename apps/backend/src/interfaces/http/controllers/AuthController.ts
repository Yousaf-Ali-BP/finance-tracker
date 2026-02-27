import type {Request, Response, NextFunction} from "express";
import {LoginUser} from "@/application/use-cases/LoginUser.js";
import {RegisterUser} from "@/application/use-cases/RegisterUser.js";
import {GetCurrentUser} from "@/application/use-cases/GetCurrentUser.js";
import type {LoginRequestDTO} from "@/application/DTO/LoginRequestDTO.js";
import type {RegisterRequestDTO} from "@/application/DTO/RegisterRequestDTO.js";
import {UnauthorizedError} from "@/application/errors/index.js";

export class AuthController {
    constructor(
        private readonly loginUser: LoginUser,
        private readonly registerUser: RegisterUser,
        private readonly getCurrentUser: GetCurrentUser
    ) {
    }

    async register(req: Request, res: Response) {
        const result = await this.registerUser.execute(req.body as RegisterRequestDTO);
        return res.status(201).json(result);
    }

    async login(req: Request, res: Response) {
        const result = await this.loginUser.execute(req.body as LoginRequestDTO);
        return res.status(200).json(result);
    }

    async me(req: Request, res: Response, next: NextFunction) {
        const userId = req.user?.sub;
        if (!userId) {
            return next(new UnauthorizedError());
        }

        const user = await this.getCurrentUser.execute(userId)
        res.status(200).json(user)

    }
}
