import { Task } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../Prisma/prisma.service";

@Injectable()
export class TaskService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async findAll(): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany();
    return tasks;
  }
}