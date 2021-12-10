import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthTokenService } from "./authToken.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'token-local') {
  constructor(
    private authTokenService: AuthTokenService
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = this.authTokenService.validateLogin(username, password);

    if (!user) throw new HttpException('Acesso negado!', HttpStatus.UNAUTHORIZED);

    return user;
  }
}
