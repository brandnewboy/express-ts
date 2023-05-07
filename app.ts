import express from 'express'
import cors from 'cors'
import 'express-async-errors'
import { matchRoutes } from './router'
import { recordLogger, logger, handle404 } from './utils'
import { sysConfig } from './config'
import path from 'path'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/file/upload', express.static(path.resolve('./file/upload-test'))) // 静态资源

recordLogger(app) // 记录访问日志
matchRoutes(app) // 匹配路由
handle404(app) // 处理404

app.listen(sysConfig.PORT, () => {
  logger.info(`App is running at http://localhost:${sysConfig.PORT}`)
})
