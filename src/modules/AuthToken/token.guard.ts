import { AuthGuard } from "@nestjs/passport";

export class TokenGuard extends AuthGuard('token-jwt') {}
