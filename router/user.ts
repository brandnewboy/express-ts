import { Router } from 'express'
const router = Router()

router.get('/list', (req, res) => {
  res.json([
    {
      name: '张利',
      age: '20'
    },
    {
      name: '方新贤',
      age: '20'
    },
    {
      name: '邢子枫',
      age: '20'
    },
    {
      name: '王波',
      age: '20'
    },
    {
      name: '姚枫',
      age: '20'
    },
    {
      name: '赵昕',
      age: '20'
    }
  ])
})

export const userRouter = router
