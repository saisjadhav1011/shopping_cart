import { Injectable } from "@nestjs/common";
import { UsersService } from "./users.service";
import { SigninDto, SignupDto } from "../dto";
import { AuthHelper } from "@app/helpers/auth.helper";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly authHelper: AuthHelper,
    ) { }

    async signup(userData: SignupDto) {
        const existingUser = await this.usersService.findByEmail(userData.email);
        if (existingUser) {
            return { message: "Email already in use" };
        }
        
        const hashedPassword = await this.authHelper.encodePassword(userData.password);
        const userToSave = { ...userData, password: hashedPassword };

        const user = await this.usersService.create(userToSave);
        return { message: "User registered successfully", user };
    }

    async signin(input: SigninDto) {
        const user = await this.usersService.findByEmail(input.email);
        if (!user) {
            return { message: "Invalid credentials" };
        }
        const isPasswordValid = await this.authHelper.isPasswordValid(input.password, user.password);
        if (!isPasswordValid) {
            return { message: "Invalid credentials" };
        }
        // const token = await this.authHelper.generateToken(user);
        return { message: "User authenticated successfully" };
    }
}