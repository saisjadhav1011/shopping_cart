import { AuthService } from "./auth.service";
import { UsersService } from "./users.service";

export const services = [
    UsersService,
    AuthService,
];

export * from './users.service';
export * from './auth.service';