import { Router, Express } from 'express'
import { userRouter } from './user'
import { blogRouter } from './blog'
import { fileRouter } from './file'
import { jwtAuth } from '../utils'

const router = Router()
router.use(jwtAuth) // token验证
router.use('/user', userRouter)
router.use('/blog', blogRouter)
router.use('/file', fileRouter)

export const matchRoutes = (app: Express) => {
  app.use('/api/v1', router)
}
