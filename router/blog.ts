import { Router } from 'express'
import { blogController } from '../controller/blog'

const router = Router()

router.get('/list', blogController.getBlog)
router.post('/add', blogController.addBlog)

export const blogRouter = router
