import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { DeepPartial } from 'typeorm'
@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }
    async getUsers() {
        await this.userRepository.findAll()
    }

    async createUser(body: DeepPartial<User>) {
       return this.userRepository.create(body)
    }

    async getUserById(id:string){
        return this.userRepository.findOneById(id)
    }
}
