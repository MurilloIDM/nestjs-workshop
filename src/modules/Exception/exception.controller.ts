import { Controller, Get, HttpException, HttpStatus, NotFoundException, UseFilters } from "@nestjs/common";
import { HttpExceptionFilter } from "./Filters/http-exception.filter";

@Controller('exception')
export class ExceptionController {
  
  @Get('204')
  exceptionNoContent(): void {
    // Utilizando a classe mãe HttpException
    throw new HttpException('', HttpStatus.NO_CONTENT);
  }

  @Get('404')
  exceptionNotFound(): void {
    // Utilizado subclasses da HttpException
    throw new NotFoundException('Mensagem do erro NOT FOUND!');
  }

  @Get('400')
  // Utilizando filtros de exceção
  @UseFilters(HttpExceptionFilter)
  exceptionBadRequest(): void {
    // Passando um objeto para o response 
    throw new HttpException({ error: 'Mensagem agora aqui' }, HttpStatus.BAD_REQUEST);
  }

}