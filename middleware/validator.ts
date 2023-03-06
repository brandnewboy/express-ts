import { MiddleWareProp } from '../types/middleware'
import { validateLoginForm } from '../utils/validator'

export const validateForm: MiddleWareProp = (req, res, next) => {
  const { username, password } = req.body
  if (!validateLoginForm({ username, password })) res.json({ msg: '用户名或密码错误' })
  next()
}
