import {UserEntity} from "../../domain/entities/UserEntity.js";
import type {UserRepository} from "../../domain/repositories/UserRepository.js";

interface RegisterInput {
    name: string;
    email: string;
    password: string;
}

export class RegisterUser {
    constructor(private readonly userRepository: UserRepository) {}

    async execute (input :RegisterInput) : Promise<void> {
        const existingUser =await this.userRepository.findByEmail(input.email);

        if (existingUser) {
            throw new Error("User already exists");
        }

        const User =new UserEntity({
            name:input.name,
            email:input.email,
            password:input.password,
            createdAt:new Date(),
        })

        await this.userRepository.save(User)
    }
}

