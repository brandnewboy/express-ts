import { Router } from 'express'
import { blogController } from '../controller/blog'

const router = Router()

router.get('/list', blogController.getBlog)

export const blogRouter = router
