import { Task } from ".prisma/client";
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AdminGuard } from "src/guards/admin.guard";
import { CreateTaskDTO } from "./dto/CreateTaskDTO";
import { UpdateTaskDTO } from "./dto/updateTaskDTO";
import { TaskService } from "./task.service";

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('')
  async create(
    @Body() payload: CreateTaskDTO
  ): Promise<Task> {
    return this.taskService.create(payload);
  }

  @Put(':id')
  async update(
    @Body() payload: UpdateTaskDTO,
    @Param('id') id: string,
  ): Promise<Task> {
    return await this.taskService.update(payload, id);
  }

  @Get('')
  @UseGuards(AdminGuard)
  async findAll(): Promise<Task[]> {
    return await this.taskService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id') id: string
  ): Promise<Task> {
    return await this.taskService.findById(id);
  }

  @Get('/users/:userId')
  async findAllByUser(
    @Param('userId') userId: string
  ): Promise<Task[]> {
    return await this.taskService.findAllByUser(userId);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string
  ): Promise<void> {
    await this.taskService.delete(id);
  }

}