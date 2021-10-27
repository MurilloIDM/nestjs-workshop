import { Injectable } from "@nestjs/common";
import { PrismaService } from "../Prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async findAll() {
    const users = await this.prisma.user.findMany({ include: { tasks: true } });
    return users;
  }
}