import { Router } from 'express'
import { fileController } from '../controller/file'
import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'file/upload-test/')
    //文件保存路径
  },
  filename: function (req, file, cb) {
    console.log(file.originalname)
    cb(null, file.originalname)
    //存储文件名
  }
})

const upload = multer({ storage })
const router = Router()

router.post('/upload', upload.single('files'), fileController.uploadFile)

export const fileRouter = router
