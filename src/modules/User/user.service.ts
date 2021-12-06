import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "../Prisma/prisma.service";
import { User } from "@prisma/client";

import { CreateUserDTO } from "./dto/createUserDTO";
import { UpdateUserDTO } from "./dto/updateUserDTO";

import {  get, isEmpty } from "lodash";

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async create({ username, password }: CreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.findByUsername(username);

    if (userAlreadyExists) {
      throw new HttpException("User already exists with username!", 400);
    }

    await this.prisma.user.create({
      data: {
        username,
        password,
      }
    });
  }

  async update({ username }: UpdateUserDTO, id: string): Promise<void> {
    await this.findById(id);

    const userAlreadyExistsWithUsername = await this.findByUsername(username);
    const idUserWithUsername = get(userAlreadyExistsWithUsername, "id", "");

    const isRecord = idUserWithUsername === id;

    if (userAlreadyExistsWithUsername && !isRecord) {
      throw new HttpException("User already exists with username!", 400);
    }

    await this.prisma.user.update({
      data: {
        username
      },
      where: { id }
    });
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({ include: { tasks: true } });

    if (isEmpty(users)) {
      throw new HttpException("No Content", 204);
    }

    return users;
  }

  async findById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        tasks: true
      }
    });

    if (!user) {
      throw new HttpException("User does not exist with this [id]!", 400);
    }

    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
    });
    return user;
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);

    await this.prisma.task.deleteMany({ where: { userId: id } });

    await this.prisma.user.delete({ where: { id } });
  }
}