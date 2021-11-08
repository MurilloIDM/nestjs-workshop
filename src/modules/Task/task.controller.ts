import { Task } from ".prisma/client";
import { Controller, Get, Param } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('')
  async findAll(): Promise<Task[]> {
    return await this.taskService.findAll();
  }

  @Get(':id')
  async findById(
    @Param("id") id: string
  ): Promise<Task> {
    return await this.taskService.findById(id);
  }

  @Get('/users/:userId')
  async findAllByUser(
    @Param("userId") userId: string
  ): Promise<Task[]> {
    return await this.taskService.findAllByUser(userId);
  }

}