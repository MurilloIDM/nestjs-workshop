import { Module } from "@nestjs/common";
import { UserModule } from "../User/user.module";
import { AuthJwtController } from "./authJwt.controller";
import { AuthJwtService } from "./authJwt.service";

@Module({
  imports: [
    UserModule
  ],
  controllers: [AuthJwtController],
  providers: [AuthJwtService],
  exports: [AuthJwtService]
})
export class AuthJwtModule {}