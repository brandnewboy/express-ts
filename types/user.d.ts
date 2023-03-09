import { User } from './db'
import { MiddleWareProp } from './middleware'

export interface UserLoginForm {
  username: string
  password: string
}

export interface UserController {
  userLogin: MiddleWareProp
  getUserList: MiddleWareProp
  test: MiddleWareProp
}

export interface UserLoginRes {
  token: string
}

export type SearchUserListParam = Partial<Omit<User, 'password' | 'state'>>
