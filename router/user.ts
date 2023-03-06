import { Router } from 'express'
import { userController } from '../controller/user'
import { validateForm } from '../middleware/validator'
import { generateToken, MD5 } from '../utils'
const router = Router()

router.get('/list', validateForm, async (req, res) => res.json(await userController.getUserList()))
router.post('/login', async (req, res) => {
  const { username, password: originPassword } = req.body

  const password = MD5(originPassword)

  const result = await userController.userLogin({ username, password })
  if (!result || result.length === 0) {
    res.json({ msg: '用户不存在' })
  }

  generateToken({ username, password, realname: result[0].realname })
  res.json({ msg: '登录成功', realname: result[0].realname })
})

export const userRouter = router
