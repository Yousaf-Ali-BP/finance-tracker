import {UserEntity} from "../../domain/entities/UserEntity.js";
import type {UserRepository} from "../../domain/repositories/UserRepository.js";
import type {PasswordHasher} from "../services/PasswordHasher.js";
import type {RegisterRequestDTO} from "../dtos/RegisterRequestDTO.js";

export class RegisterUser {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly passwordHasher: PasswordHasher
    ) {}

    async execute(input: RegisterRequestDTO): Promise<void> {
        const existingUser = await this.userRepository.findByEmail(input.email);

        if (existingUser) {
            throw new Error("User already exists");
        }

        const passwordHash = await this.passwordHasher.hash(input.password);

        const User = new UserEntity({
            name: input.name,
            email: input.email,
            password: passwordHash,
            createdAt: new Date(),
        })

        await this.userRepository.save(User)
    }
}