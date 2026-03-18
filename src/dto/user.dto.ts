import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ description: 'First name of the user', example: 'John', required: true })
    @IsString()
    @IsNotEmpty({ message: 'First name is required' })
    firstName: string;

    @ApiProperty({ description: 'Last name of the user', example: 'Doe', required: true })
    @IsString()
    @IsNotEmpty({ message: 'Last name is required' })
    lastName: string;

    @ApiProperty({ description: 'Email address of the user', example: 'john.doe@example.com', required: true })
    @IsString()
    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @ApiProperty({ description: 'Password for the user account', example: 'strongpassword123', required: true })
    @IsString()
    @IsNotEmpty({ message: 'Password is required' })
    password: string;
}

export class UpdateUserDto extends CreateUserDto {}

export class CreateUserResponseDto {
    @ApiProperty({ description: 'Unique identifier of the user', example: 1 })
    @Expose()
    id: number;

    @ApiProperty({ description: 'First name of the user', example: 'John' })
    @Expose()
    firstName: string;

    @ApiProperty({ description: 'Last name of the user', example: 'Doe' })
    @Expose()
    lastName: string;

    @ApiProperty({ description: 'Email address of the user', example: 'john.doe@example.com' })
    @Expose()
    email: string;
}

export class UsersListResponseDto {
    @ApiProperty({ description: 'List of users', type: [CreateUserResponseDto] })
    @Expose()
    users: CreateUserResponseDto[];
}

