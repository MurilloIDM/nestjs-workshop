import { Task } from ".prisma/client";
import { HttpException, Injectable } from "@nestjs/common";
import { isEmpty } from "lodash";
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

  async findAllByUser(userId: string): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany({
      where: { userId }
    });

    if (isEmpty(tasks)) {
      throw new HttpException("No Content", 204);
    }

    return tasks;
  }

  async findById(id: string): Promise<Task> {
    const task = await this.prisma.task.findUnique({
      where: { id }
    });

    if (!task) {
      throw new HttpException("Task does not exist with this [id]!", 400);
    }

    return task;
  }
}