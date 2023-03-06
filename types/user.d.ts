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
