import { User } from "@prisma/client";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Request, UseGuards, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/createUserDTO";
import { UpdateUserDTO } from "./dto/updateUserDTO";
import { TransformInterceptor } from "src/interceptors/transform.interceptor";
import { AuthJwtGuard } from "../Auth/authJwt.guard";

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Post('')
  async create(
    @Body() body: CreateUserDTO
  ): Promise<void> {
    await this.userService.create(body);
  }

  @Put(':id')
  async update(
    @Body() body: UpdateUserDTO,
    @Param('id') id: string
  ): Promise<void> {
    await this.userService.update(body, id);
  }

  @Get('')
  @UseGuards(AuthJwtGuard)
  @UseInterceptors(TransformInterceptor)
  async findAll(@Request() req): Promise<User[]> {
    console.log(req);
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