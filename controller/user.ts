import userDB from '../db/user'
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
      res.json({ msg: '用户不存在' })
    }

    generateToken({ username, password, realname: result[0].realname })
    res.json({ msg: '登录成功', realname: result[0].realname })
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
