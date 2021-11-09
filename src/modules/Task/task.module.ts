import { Module } from "@nestjs/common";
import { PrismaModule } from "../Prisma/prisma.module";
import { UserModule } from "../User/user.module";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";

@Module({
  providers: [TaskService],
  controllers: [TaskController],
  imports: [PrismaModule, UserModule]
})
export class TaskModule {}