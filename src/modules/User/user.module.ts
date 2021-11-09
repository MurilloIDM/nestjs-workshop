import { Module } from "@nestjs/common";
import { PrismaModule } from "../Prisma/prisma.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule],
  exports: [UserService],
})

export class UserModule {}