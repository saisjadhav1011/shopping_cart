import { Body, Controller, Post } from "@nestjs/common";
import { ApiBadRequestResponse, ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { SigninDto, SignupDto } from "../dto";
import { AuthService } from "../services";

@ApiTags("auth")
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    @ApiOperation({ summary: "User Signup", description: "Endpoint for user registration. Accepts user details and creates a new account." })
    @ApiBody({ type: SignupDto })
    @ApiResponse({ status: 201, description: 'The user has been successfully registered.' })
    @ApiBadRequestResponse({ description: 'Invalid input data. Please check the provided information and try again.' })
    signup(@Body() body: SignupDto) {
        return this.authService.signup(body);
    }

    @Post('signin')
    @ApiOperation({ summary: "User Signin", description: "Endpoint for user authentication. Accepts user credentials and returns an access token upon successful authentication." })
    @ApiBody({ type: SigninDto })
    @ApiResponse({ status: 200, description: 'The user has been successfully authenticated.' })
    @ApiBadRequestResponse({ description: 'Invalid credentials. Please check your email and password and try again.' })
    signin(@Body() body: SigninDto) {
        return this.authService.signin(body);
    }
}