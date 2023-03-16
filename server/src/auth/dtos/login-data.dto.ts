import {
  IsEmail,
  IsString,
  IsStrongPassword,
  IsNotEmpty,
} from 'class-validator'

export class LoginData {
  @IsEmail()
  @IsNotEmpty()
  email?: string

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password?: string
}
