import { Priority, Task } from ".prisma/client";
import { HttpException, Injectable } from "@nestjs/common";
import { isEmpty } from "lodash";
import { PrismaService } from "../Prisma/prisma.service";
import { CreateTaskDTO } from "./dto/CreateTaskDTO";

@Injectable()
export class TaskService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async create({
    title,
    description,
    priorityValue,
    userId,
  }: CreateTaskDTO): Promise<Task> {
    const task = await this.prisma.task.create({
      data: {
        title,
        description,
        priority: Priority[priorityValue],
        userId
      }
    });

    return task;
  }

  async findAll(): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany();

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

  async findAllByUser(userId: string): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany({
      where: { userId }
    });

    if (isEmpty(tasks)) {
      throw new HttpException("No Content", 204);
    }

    return tasks;
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);

    await this.prisma.task.delete({
      where: { id }
    });
  }
}