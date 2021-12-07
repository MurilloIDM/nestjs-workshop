import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthLocalGuard } from "./authLocal.guard";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthLocalGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

}
