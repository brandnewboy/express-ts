import { Result } from '../res/result'
import { FileController } from '../types/file'

export const fileController: FileController = {
  async uploadFile(req, res, next) {
    console.log('上传文件', req.file)
    if (req.file) {
      res.json(
        Result.ok<{
          filePath: string
        }>({
          filePath: 'http://localhost:3001/file/upload' + req.file.originalname
        })
      )
    }
  }
}
