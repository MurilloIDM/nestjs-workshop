import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/Prisma/prisma.module';
import { TaskModule } from './modules/Task/task.module';
import { UserModule } from './modules/User/user.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    TaskModule,
  ]
})

export class AppModule {}