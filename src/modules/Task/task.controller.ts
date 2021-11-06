import { Task } from ".prisma/client";
import { Controller, Get } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('')
  async findAll(): Promise<Task[]> {
    return await this.taskService.findAll();
  }

}