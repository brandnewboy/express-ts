import userDB from '../db/user'
import { UserLoginForm } from '../types/user'
import { MD5 } from '../utils'

export const userController = {
  async userLogin(userInfo: UserLoginForm) {
    const password = userInfo.password //MD5(userInfo.password)
    const data = await userDB.getUserInfo({ username: userInfo.username, password })
    return data
  },

  async getUserList() {
    const data = await userDB.getUserList()
    return data
  }
}
