import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/Prisma/prisma.module';
import { UserModule } from './modules/User/user.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
  ]
})

export class AppModule {}