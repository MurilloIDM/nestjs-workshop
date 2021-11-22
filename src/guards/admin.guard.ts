import { CanActivate, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { get } from "lodash";

export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    
    const headers = get(request, "headers", {});
    const accessToken = get(headers, "access_token", "");

    if (accessToken !== "12345") {
      throw new HttpException("O access_token é inválido!", HttpStatus.BAD_REQUEST);
    }
    
    return true;
  }

}