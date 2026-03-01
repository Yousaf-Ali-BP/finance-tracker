import type {UserRepository} from "@/domain/repositories/UserRepository.js";
import {User} from "@/domain/entities/User.js";
import {UserModel} from "@/infrastructure/database/models/UserModel.js";

export class MongoUserRepository implements UserRepository {

    async findByEmail(email: string): Promise<User | null>{
        const doc=await UserModel.findOne({email})
        if(!doc){
            return null;
        }
        return new User({
            id:doc._id.toString(),
            name:doc.name,
            email:doc.email,
            password:doc.password,
            createdAt:doc.createdAt
        })
    }

    async findById(id: string): Promise<User | null>{
        const doc=await UserModel.findById(id)
        if(!doc){
            return null;
        }
        return new User({
            id:doc._id.toString(),
            name:doc.name,
            email:doc.email,
            password:doc.password,
            createdAt:doc.createdAt
        })
    }

    async save(user: User): Promise<void>{
        await UserModel.create({
            name: user.name,
            email: user.email,
            password: user.password,
            createdAt:user.createdAt
        })
    }
}
