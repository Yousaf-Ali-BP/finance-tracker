import type {UserRepository} from "@/domain/repositories/UserRepository.js";
import type {CurrentUserResponseDTO} from "@/application/DTO/CurrentUserResponseDTO.js";
import {MissingRequiredFieldError, ResourceNotFoundError} from "@/application/errors/index.js";

export class GetCurrentUser {
    constructor(
        private readonly userRepository: UserRepository
    ) {}

    async execute(userId:string) : Promise<CurrentUserResponseDTO> {
        const user=await this.userRepository.findById(userId)

        if(!user) {
            throw new ResourceNotFoundError('USER_NOT_FOUND', 'User not found')
        }

        if (!user.id) {
            throw new MissingRequiredFieldError();
        }

        return {
            id: user.id,
            name: user.name,
            email: user.email
        };
    }
}

