import {UserEntity} from "@/domain/entities/UserEntity.js";

export interface UserRepository {
    findByEmail(email: string): Promise<UserEntity | null>;
    save(user: UserEntity): Promise<void>
}
