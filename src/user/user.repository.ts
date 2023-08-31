import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import { User } from "./user.entity";
import { BaseAbstractRepostitory } from "src/common/base.repository";
import { UserRepositoryInterface } from "./user.interface";


export class UserRepository extends BaseAbstractRepostitory<User> implements UserRepositoryInterface {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
        super(userRepository)
    }
}