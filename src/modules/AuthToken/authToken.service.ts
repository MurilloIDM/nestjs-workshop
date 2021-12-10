import { User } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../User/user.service";

@Injectable()
export class AuthTokenService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateLogin(username: string, password: string): Promise<User | null> {
    const user = await this.userService.findByUsername(username);

    if (user.password === password) {
      return user;
    }

    return null;
  } 

  async generateJWT({ username, id }: User): Promise<any> {
    const payload = { username, sub: id };
    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }
}
