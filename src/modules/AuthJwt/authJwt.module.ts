import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../User/user.module";

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: "2F93B98BA3AEABAFEFC4C29EBD867549BD1D71C",
      signOptions: {
        expiresIn: '1m'
      }
    })
  ],
  providers: []
})
export class AuthJwtModule {}