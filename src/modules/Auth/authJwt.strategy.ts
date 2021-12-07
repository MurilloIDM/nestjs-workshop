import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export class AuthJwtStrategy extends PassportStrategy(Strategy, 'auth-jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "2F93B98BA3AEABAFEFC4C29EBD867549BD1D71C", // Exposto apenas para testes
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username, date: new Date() };
  }
}
