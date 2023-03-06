import { Request, Response, NextFunction } from 'express'
import { validateLoginForm } from '../utils/validator'

export const validateForm = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body
  if (!validateLoginForm({ username, password })) res.json({ msg: '用户名或密码错误' })
  next()
}
