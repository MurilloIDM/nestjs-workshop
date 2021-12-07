import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../User/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AuthJwtStrategy } from "./authJwt.strategy";
import { AuthLocalStrategy } from "./authLocal.strategy";

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: "2F93B98BA3AEABAFEFC4C29EBD867549BD1D71C", // Exposto apenas para testes
      signOptions: { expiresIn: '90m', algorithm: "HS384" },
    })
  ],
  exports: [AuthService],
  controllers: [AuthController],
  providers: [AuthService, AuthLocalStrategy, AuthJwtStrategy],
})
export class AuthModule {}
