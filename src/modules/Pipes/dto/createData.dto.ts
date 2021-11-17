import { IsEmail, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateData {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsUUID()
  @IsNotEmpty()
  id: string;
}