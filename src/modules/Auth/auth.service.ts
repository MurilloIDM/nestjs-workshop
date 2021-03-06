import { User } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../User/user.service";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.userService.findByUsername(username);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }

  async login(user: any): Promise<any> {
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload)
    };
  }

}
