import { RequestHandler } from 'express'
import { getUserList as userList } from '../db/user'

export const userController = {
  async userLogin() {},

  async getUserList() {
    const data = await userList()
    return data
  }
}
