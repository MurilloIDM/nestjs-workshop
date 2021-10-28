import { User } from ".prisma/client";
import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id') id: string
  ): Promise<User> {
    return this.userService.findById(id);
  }
}