import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto, UsersListResponseDto } from "../dto";
import { UsersService } from "../services";

@ApiTags("users")
@ApiBearerAuth()
@Controller("users")
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ) {}

    @Get()
    @ApiOperation({ summary: "Get all users", description: "Returns a list of all users in the system."})
    @ApiResponse({ status: 200, description: 'List of users', type: UsersListResponseDto })
    findAll() {
        return this.usersService.findAll();
    }

    @Post()
    @ApiOperation({ summary: "Create a new user", description: "Creates a new user with the provided information."})
    @ApiBody({ description: 'Data for creating a new user', type: CreateUserDto })
    @ApiResponse({ status: 201, description: 'The user has been successfully created.'})
    create(@Body() input: CreateUserDto) {
        return this.usersService.create(input);
    }

    @Patch(':id')
    @ApiOperation({ summary: "Update a user", description: "Updates the information of an existing user."})
    @ApiBody({ description: 'Data for updating the user', type: CreateUserDto })
    @ApiResponse({ status: 200, description: 'The user has been successfully updated.'})
    update(@Body() input: Partial<CreateUserDto>, @Param('id') id: number) {
        return this.usersService.update(id, input);
    }

    @Delete(':id')
    @ApiOperation({ summary: "Delete a user", description: "Deletes an existing user from the system."})
    @ApiResponse({ status: 200, description: 'The user has been successfully deleted.'})
    delete(@Param('id') id: number) {
        return this.usersService.delete(id);
    }
}