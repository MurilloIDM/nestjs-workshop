import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthLocalGuard } from "./authLocal.guard";

@Controller('auth-local')
export class AuthLocalController {

  @UseGuards(AuthLocalGuard)
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }

}
