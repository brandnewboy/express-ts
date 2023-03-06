import { Router } from 'express'
import { userController } from '../controller/user'
import { validateForm } from '../middleware/validator'
const router = Router()

router.get('/list', userController.getUserList)
router.get('/test', userController.test)
router.post('/login', validateForm, userController.userLogin)

export const userRouter = router
