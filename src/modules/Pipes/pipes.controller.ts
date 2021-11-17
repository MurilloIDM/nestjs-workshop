import { Body, Controller, Get, ParseIntPipe, ParseUUIDPipe, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateData } from "./dto/createData.dto";

class Response {
  value: string;
}

@Controller('pipes')
export class PipesController {

  // Transformação de tipo. Pode ser feita para outros, como:
  // float, boolean, array e enum
  @Get('transform-int')
  transformInt(
    @Query('value', new ParseIntPipe()) value: number
  ): Response {
    const typeofStr = typeof value;
    return { value: typeofStr };
  }

  // Validação se o parâmetro é um UUID
  @Get('validate-uuid')
  validateUUID(
    @Query('id', ParseUUIDPipe) id: string
  ): Response {
    return { value: id };
  }

  @Post('validate-payload')
  // Como há um único parâmetro, podemos usar o @UsePipes ao invés de trabalhar em escopo de parâmetro.
  @UsePipes(ValidationPipe)
  validatePayload(
    @Body() payload: CreateData
  ): string {
    return 'ok';
  }
}