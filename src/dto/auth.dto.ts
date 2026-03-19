import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignupDto {
    @ApiProperty({ description: "The user's first name", example: "John" })
    @IsNotEmpty({ message: "First name is required" })
    @IsString({ message: "First name must be a string" })
    firstName: string;

    @ApiProperty({ description: "The user's last name", example: "Doe" })
    @IsNotEmpty({ message: "Last name is required" })
    @IsString({ message: "Last name must be a string" })
    lastName: string;

    @ApiProperty({ description: "The user's email address", example: "user@example.com" })
    @IsNotEmpty({ message: "Email is required" })
    @IsString({ message: "Email must be a string" })
    @IsEmail({}, { message: "Email must be a valid email address" })
    email: string;

    @ApiProperty({ description: "The user's password", example: "password123" })
    @IsNotEmpty({ message: "Password is required" })
    @IsString({ message: "Password must be a string" })
    password: string;
}

export class SigninDto {
    @ApiProperty({ description: "The user's email address", example: "user@example.com" })
    @IsNotEmpty({ message: "Email is required" })
    @IsString({ message: "Email must be a string" })
    @IsEmail({}, { message: "Email must be a valid email address" })
    email: string;

    @ApiProperty({ description: "The user's password", example: "password123" })
    @IsNotEmpty({ message: "Password is required" })
    @IsString({ message: "Password must be a string" })
    password: string;

}