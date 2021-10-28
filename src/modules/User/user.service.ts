import { Injectable } from "@nestjs/common";
import { PrismaService } from "../Prisma/prisma.service";
import { User } from "./entity/user.entity";

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({ include: { tasks: true } });
    return users;
  }

  async findById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user;
  }
}