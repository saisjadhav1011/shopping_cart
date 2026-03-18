import { UserRepository } from "@app/database";
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto";

@Injectable()
export class UsersService {
    constructor(
        private readonly userRepository: UserRepository,
    ) {}

    async create(input: CreateUserDto) {
        // Implementation for creating a new user will go here
        const user = this.userRepository.create(input);
        return this.userRepository.save(user);
    }

    async findAll() {
        return this.userRepository.find();
    }

    async update(id: number, input: Partial<CreateUserDto>) {
        await this.userRepository.update(id, input);
        return this.userRepository.findOneBy({ id });
    }

    async delete(id: number) {
        await this.userRepository.delete(id);
        return { message: 'User deleted successfully' };
    }
}