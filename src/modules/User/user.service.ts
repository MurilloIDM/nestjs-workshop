import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "../Prisma/prisma.service";
import { User } from "@prisma/client";
import { CreateUserDTO } from "./dto/createUserDTO";

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async create({ username }: CreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.findByUsername(username);

    if (userAlreadyExists) {
      throw new HttpException("User already exists with username!", 400);
    }

    await this.prisma.user.create({ data: {
      username
    }});
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({ include: { tasks: true } });
    return users;
  }

  async findById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        tasks: true
      }
    });
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
    await this.prisma.user.delete({ where: { id } });
  }
}