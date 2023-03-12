export interface User {
  id: number
  username: string
  password: string
  realname: string
  state: number
}

export type UserList = Partial<Omit<User, 'password' | 'state'>>[]

export interface Blog {
  id: string
  title: string
  content: string
  createtime: number
  author: string
  desc: string
}

export type BlogList = Blog[]
