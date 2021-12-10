import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class TokenStrategy extends PassportStrategy(Strategy, 'token-jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '46070d4bf934fb0d4b06d9e2c46e346944e322444900a435d7d9a95e6d7435f5'
    });
  }

  validate({ username, sub }: any): any {
    return { username, userId: sub };
  }
}
