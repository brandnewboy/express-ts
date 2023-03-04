export interface User {
  id: number
  username: string
  password: string
  realname: string
  state: number
}

export type UserList = User[]
