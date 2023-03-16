import {
  Body,
  Controller,
  Post,
  Session,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { UserSession } from '../types/user.session'
import { AuthService } from './auth.service'
import { LoginData } from './dtos/login-data.dto'

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UsePipes(new ValidationPipe({ transform: true }))
  login(@Body() loginData: LoginData, @Session() session: UserSession) {
    return this.authService.login(loginData, session)
  }
}
