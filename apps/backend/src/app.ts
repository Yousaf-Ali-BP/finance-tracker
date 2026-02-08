import express from "express";

import {MongoUserRepository} from "./infrastructure/repositories/MongoUserRepository.js";
import {BcryptPasswordHasher} from "./infrastructure/auth/BcryptPasswordHasher.js";
import {JwtService} from "./infrastructure/auth/JwtService.js";
import {LoginUser} from "./application/use-cases/LoginUser.js";
import {RegisterUser} from "./application/use-cases/RegisterUser.js";
import {AuthController} from "./interfaces/http/controllers/AuthController.js";
import {authRoutes} from "./interfaces/http/routes/auth.routes.js";

export const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
    res.json({status: "OK"});
});

//User Authentication
const userRepo= new MongoUserRepository();
const jwtService = new JwtService();
const passwordHasher=new BcryptPasswordHasher()

const loginUser = new LoginUser(userRepo, jwtService,passwordHasher);
const registerUser = new RegisterUser(userRepo,passwordHasher);

const authController = new AuthController(loginUser, registerUser);

app.use("/api/auth",authRoutes(authController));