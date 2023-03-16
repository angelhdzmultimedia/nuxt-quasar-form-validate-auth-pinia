import { createModel } from '.'
import type { User } from '../types/user'

export const UserModel = createModel<User>('users')
