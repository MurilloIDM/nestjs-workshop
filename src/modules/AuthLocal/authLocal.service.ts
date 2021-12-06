import { User } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { UserService } from "../User/user.service";

@Injectable()
export class AuthLocalService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.userService.findByUsername(username);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }

}
