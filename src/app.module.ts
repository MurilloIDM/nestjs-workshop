import { Module } from '@nestjs/common';
import { UserModule } from './modules/User/user.module';

@Module({
  imports: [
    UserModule
  ]
})

export class AppModule {}