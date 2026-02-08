import type {UserRepository} from "../../domain/repositories/UserRepository.js";
import type {TokenService} from "../services/TokenService.js";
import type {PasswordHasher} from "../services/PasswordHasher.js";
import type {LoginRequestDTO} from "../dtos/LoginRequestDTO.js";
import type {LoginResponseDTO} from "../dtos/LoginResponseDTO.js";

export class LoginUser {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly tokenService: TokenService,
        private readonly passwordHasher: PasswordHasher
    ) {}

    async execute(input: LoginRequestDTO): Promise<LoginResponseDTO> {
        const user = await this.userRepository.findByEmail(input.email);

        if (!user) {
            throw new Error("Invalid credentials");
        }

        // Password comparison will be delegated later
        const isPasswordValid = await this.passwordHasher.compare(input.password, user.password);

        if (!isPasswordValid) {
            throw new Error("Invalid credentials");
        }

        const userId = user._id;
        if (!userId) {
            throw new Error("User id is missing");
        }
        const token = this.tokenService.generateToken(userId);

        return {token}

    }
}