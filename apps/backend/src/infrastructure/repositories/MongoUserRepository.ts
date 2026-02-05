import type {UserRepository} from "../../domain/repositories/UserRepository.js";
import {UserEntity} from "../../domain/entities/UserEntity.js";
import {UserModel} from "../database/models/UserModel.js";

export class MongoUserRepository implements UserRepository {

    async findByEmail(email: string): Promise<UserEntity | null>{
        const doc=await UserModel.findOne({email})
        if(!doc){
            return null;
        }
        return new UserEntity({
            _id:doc._id.toString(),
            name:doc.name,
            email:doc.email,
            password:doc.password,
            createdAt:doc.createdAt
        })
    }

    async save(user: UserEntity): Promise<void>{
        await UserModel.create({
            name: user.name,
            email: user.email,
            password: user.password,
            createdAt:user.createdAt
        })
    }
}
