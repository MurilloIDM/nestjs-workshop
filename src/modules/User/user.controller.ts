import { User } from ".prisma/client";
import { Controller, Delete, Get, HttpCode, HttpStatus, Param } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

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