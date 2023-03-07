import userDB from '../db/user'
import { Result } from '../res/result'
import { UserController } from '../types/user'
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
    }

    // 登录成功
    const token = generateToken({
      username,
      password,
      realname: result[0].realname
    })
    res.json(Result.ok<{ token: string }>('登录成功', { token }))
  },

  /**
   * 获取用户列表
   * @param req
   * @param res
   * @param next
   */
  async getUserList(req, res, next) {
    const data = await userDB.getUserList()
    res.json({ msg: '请求成功', data })
  },

  /**
   * 测测试接口
   * @param req
   * @param res
   * @param next
   */
  async test(req, res, next) {}
}
