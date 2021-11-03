import { User } from "@prisma/client";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/createUserDTO";

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Post()
  async create(
    @Body() body: CreateUserDTO
  ): Promise<void> {
    return await this.userService.create(body);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id') id: string
  ): Promise<User> {
    return await this.userService.findById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(
    @Param('id') id: string
  ): Promise<void> {
    await this.userService.delete(id);
  }
}