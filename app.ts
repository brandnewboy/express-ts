import express from 'express'
import cors from 'cors'
import 'express-async-errors'
import { matchRoutes } from './router'
import { recordLogger, logger, handle404 } from './utils'
import { sysConfig } from './config'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

recordLogger(app) // 记录访问日志
matchRoutes(app) // 匹配路由
handle404(app) // 处理404

app.listen(sysConfig.PORT, () => {
  logger.info(`App is running at http://localhost:${sysConfig.PORT}`)
})
