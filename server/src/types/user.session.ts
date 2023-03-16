import type { Session } from 'express-session'

export type UserSession = Session & {
  user: string
}
