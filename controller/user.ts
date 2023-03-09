import { userDB } from '../db/user'
import { Result } from '../res/result'
import { UserList } from '../types/db'
import { UserController, UserLoginRes } from '../types/user'
import { generateToken, MD5 } from '../utils'

export const userController: UserController = {
  /**
   * 用户登录
   * @param req
   * @param res
   * @param next
   */
  async userLogin(req, res, next) {
    const { username, password: originPassword } = req.body
    const password = MD5(originPassword)
    const result = await userDB.getUserInfo({ username, password })
    if (!result || result.length === 0) {
      res.json(Result.error('用户不存在'))
      return
    }

    // 登录成功
    const token = generateToken({
      username,
      password,
      realname: result[0].realname
    })
    res.json(Result.ok<UserLoginRes>({ token }))
    return
  },

  /**
   * 获取用户列表
   * @param req
   * @param res
   * @param next
   */
  async getUserList(req, res, next) {
    const body = req.body
    const data = await userDB.getUserList(body)
    res.json(Result.ok<UserList>(data))
  },

  /**
   * 测测试接口
   * @param req
   * @param res
   * @param next
   */
  async test(req, res, next) {}
}
