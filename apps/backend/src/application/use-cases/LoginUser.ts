import type {UserRepository} from "../../domain/repositories/UserRepository.js";
import type {TokenService} from "../services/TokenService.js";

interface LoginInput {
    email: string;
    password: string;
}

export class LoginUser{
    constructor(
        private readonly userRepository: UserRepository,
        private readonly tokenService: TokenService,
    ) {}

    async execute(input: LoginInput): Promise<{token:string}> {
        const user=await this.userRepository.findByEmail(input.email);

        if (!user) {
            throw new Error("Invalid credentials");
        }

        // Password comparison will be delegated later
        const isPasswordValid = true; // placeholder

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
