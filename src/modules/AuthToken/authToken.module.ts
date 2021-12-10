import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "../User/user.module";
import { AuthTokenController } from "./authToken.controller";
import { AuthTokenService } from "./authToken.service";
import { LocalStrategy } from "./local.strategy";
import { TokenStrategy } from "./token.strategy";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: '46070d4bf934fb0d4b06d9e2c46e346944e322444900a435d7d9a95e6d7435f5',
      signOptions: { expiresIn: '90m' }
    }),
  ],
  controllers: [AuthTokenController],
  providers: [AuthTokenService, LocalStrategy, TokenStrategy],
})
export class AuthTokenModule {}
