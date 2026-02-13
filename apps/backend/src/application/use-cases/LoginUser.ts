import type {UserRepository} from "@/domain/repositories/UserRepository.js";
import type {TokenService} from "@/application/services/TokenService.js";
import type {PasswordHasher} from "@/application/services/PasswordHasher.js";
import type {LoginRequestDTO} from "@/application/DTO/LoginRequestDTO.js";
import type {LoginResponseDTO} from "@/application/DTO/LoginResponseDTO.js";
import {InvalidCredentialsError , MissingRequiredFieldError} from "@/application/errors/index.js";

export class LoginUser {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly tokenService: TokenService,
        private readonly passwordHasher: PasswordHasher
    ) {}

    async execute(input: LoginRequestDTO): Promise<LoginResponseDTO> {
        const user = await this.userRepository.findByEmail(input.email);

        if (!user) {
            throw new InvalidCredentialsError();
        }

        // Password comparison will be delegated later
        const isPasswordValid = await this.passwordHasher.compare(input.password, user.password);

        if (!isPasswordValid) {
            throw new InvalidCredentialsError();
        }

        const userId = user._id;
        if (!userId) {
            throw new MissingRequiredFieldError()
        }
        const token = this.tokenService.generateToken(userId);

        return {token}

    }
}
