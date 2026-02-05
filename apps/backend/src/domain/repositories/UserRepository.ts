import {UserEntity} from "../entities/UserEntity.js";

export interface UserRepository{
    findByEmail(email:string):Promise<UserEntity | null>;
    //findById(id:string):Promise<UserEntity | null>;
    save(user :UserEntity):Promise<void>
}