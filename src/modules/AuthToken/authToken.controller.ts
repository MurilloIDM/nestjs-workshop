import { Controller, Post, Req, UseGuards } from "@nestjs/common";
import { AuthTokenService } from "./authToken.service";
import { LocalGuard } from "./local.guard";

@Controller('auth-token')
export class AuthTokenController {
  constructor(
    private authTokenService: AuthTokenService,
  ) {}

  @Post()
  @UseGuards(LocalGuard)
  async login(
    @Req() req
  ): Promise<any> {
    return this.authTokenService.generateJWT(req.user);
  }

}
