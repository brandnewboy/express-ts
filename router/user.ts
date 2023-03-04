import { Router } from 'express'
import { userController } from '../controller/user'
const router = Router()

router.get('/list', async (req, res) => res.json(await userController.getUserList()))
router.post('/login', async (req, res) => res.json(await userController.userLogin()))

export const userRouter = router
