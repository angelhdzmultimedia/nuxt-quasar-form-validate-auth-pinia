import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { UserModel } from '../database/user.schema'
import { AuthUser } from '../types/auth-user'
import { User } from '../types/user'
import { UserSession } from '../types/user.session'
import { LoginData } from './dtos/login-data.dto'
import { RegisterData } from './dtos/register-data.dto'

@Injectable()
export class AuthService {
  public async login(
    loginData: LoginData,
    session: UserSession,
  ): Promise<AuthUser> {
    const { email, password } = loginData

    const user: User | undefined = UserModel.findOne({ email })

    if (!user) {
      throw new NotFoundException('User not found')
    }

    return user as AuthUser
  }

  public async register(registerData: RegisterData): Promise<AuthUser> {
    const { email, password, name } = registerData
    const user: User | undefined = UserModel.findOne({ email })

    if (user) {
      throw new ConflictException('User not found')
    }

    const newUser = {
      email,
      password,
      name
    }

    await UserModel.create(newUser)

    const {password: _, ...result} = newUser
    return result
  }
}
