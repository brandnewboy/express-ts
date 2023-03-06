import { Router, Express } from 'express'
import { userRouter } from './user'

const router = Router()
router.use('/user', userRouter)

export const matchRoutes = (app: Express) => {
  app.use('/api/v1', router)
}
