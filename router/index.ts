import { Router, Express } from 'express'
import { userRouter } from './user'
import { jwtAuth } from '../utils'

const router = Router()
router.use(jwtAuth) // token验证
router.use('/user', userRouter)

export const matchRoutes = (app: Express) => {
  app.use('/api/v1', router)
}
