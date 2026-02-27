import { UserEntity } from "@/domain/entities/UserEntity.js";
import type { UserRepository } from "@/domain/repositories/UserRepository.js";
import type { PasswordHasher } from "@/application/services/PasswordHasher.js";
import type { RegisterRequestDTO } from "@/application/DTO/RegisterRequestDTO.js";
import type { RegisterResponseDTO } from "@/application/DTO/RegisterResponseDTO.js";
import { UserAlreadyExistsError } from "@/application/errors/index.js";

export class RegisterUser {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordHasher: PasswordHasher,
  ) {}

  async execute(input: RegisterRequestDTO): Promise<RegisterResponseDTO> {
    const existingUser = await this.userRepository.findByEmail(input.email);

    if (existingUser) {
      throw new UserAlreadyExistsError();
    }

    const passwordHash = await this.passwordHasher.hash(input.password);

    const User = new UserEntity({
      name: input.name,
      email: input.email,
      password: passwordHash,
      createdAt: new Date(),
    });

    await this.userRepository.save(User);
    return { message: "User registered successfully" };
  }
}
