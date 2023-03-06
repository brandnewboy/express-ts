import path from 'path'
import fs from 'fs'
import morgan from 'morgan'
import pino from 'pino'
import dayjs from 'dayjs'
import { Express } from 'express'

const IS_DEV = process.env.NODE_ENV === 'development'

export const recordLogger = (app: Express) => {
  if (IS_DEV) {
    app.use(morgan('dev'))
  } else {
    const filePath = path.join(__dirname, '..', 'logs', 'access.log')
    console.log(filePath)
    const writeStream = fs.createWriteStream(filePath, { flags: 'a' })
    app.use(
      morgan('combined', {
        stream: writeStream
      })
    )
  }
}

export const logger = pino({
  transport: {
    // pino 7.x的写法有所不同
    target: 'pino-pretty'
  },
  base: {
    pid: false
  },
  timestamp: () => `,"time":"${dayjs().format()}"`
})
