import type {Request, Response} from "express";
import {LoginUser} from "../../../application/use-cases/LoginUser.js";
import {RegisterUser} from "../../../application/use-cases/RegisterUser.js";

export class AuthController {
    constructor(
        private readonly loginUser: LoginUser,
        private readonly registerUser: RegisterUser
    ) {}

    async register(req: Request, res: Response) {
        await this.registerUser.execute(req.body);
        return res.status(201).json({message:'User registered successfully'});
    }

    async login(req: Request, res: Response) {
        const result=await this.loginUser.execute(req.body);
        return res.status(200).json(result);
    }
}


