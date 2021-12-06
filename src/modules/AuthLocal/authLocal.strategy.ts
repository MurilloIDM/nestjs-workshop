import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthLocalService } from "./authLocal.service";

@Injectable()
export class AuthLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authLocalService: AuthLocalService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authLocalService.validateUser(username, password);

    if (!user) throw new UnauthorizedException();

    return user;
  }
}
