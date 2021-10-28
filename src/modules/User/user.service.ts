import { Injectable } from "@nestjs/common";
import { PrismaService } from "../Prisma/prisma.service";
import { User } from "@prisma/client";

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
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        tasks: true
      }
    });
    return user;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}