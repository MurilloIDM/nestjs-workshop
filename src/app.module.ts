import { Module } from '@nestjs/common';
import { AuthJwtModule } from './modules/AuthJwt/authJwt.module';
import { AuthLocalModule } from './modules/AuthLocal/authLocal.module';
import { ExceptionModule } from './modules/Exception/exception.module';
import { PipesModule } from './modules/Pipes/pipes.module';
import { PrismaModule } from './modules/Prisma/prisma.module';
import { TaskModule } from './modules/Task/task.module';
import { UserModule } from './modules/User/user.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    TaskModule,
    ExceptionModule,
    PipesModule,
    AuthLocalModule,
    AuthJwtModule,
  ]
})

export class AppModule {}