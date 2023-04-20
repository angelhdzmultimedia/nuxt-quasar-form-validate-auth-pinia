import {
  IsEmail,
  IsString,
  IsStrongPassword,
  IsNotEmpty,
} from 'class-validator'

export class RegisterData {
  @IsEmail()
  @IsNotEmpty()
  email?: string

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password?: string

  @IsNotEmpty()
  @IsString()
  name?: string
}
