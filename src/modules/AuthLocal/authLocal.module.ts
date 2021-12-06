import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../User/user.module";
import { AuthLocalController } from "./authLocal.controller";
import { AuthLocalService } from "./authLocal.service";
import { AuthLocalStrategy } from "./authLocal.strategy";

@Module({
  controllers: [AuthLocalController],
  imports: [UserModule, PassportModule],
  providers: [AuthLocalService, AuthLocalStrategy],
})
export class AuthLocalModule {}
