import express from 'express'
import router from './router'
import config from './config'
import { logger } from './utils/logger'

const app = express()
app.use(express.json())

app.use('/api/v1', router)

app.listen(config.sysConfig.PORT, () => {
  logger.info(`App is running at http://localhost:${config.sysConfig.PORT}`)
})
