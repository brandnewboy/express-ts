import pino from 'pino'
import dayjs from 'dayjs'

export const logger = pino(
  {
    transport: {
      target: 'pino-pretty'
    },
    base: {
      pid: false
    },
    timestamp: () => `, "time": "${dayjs().format()}"`,
    mkdir: true
  },
  pino.destination({
    dest: './log/pino-logger.log', // omit for stdout
    minLength: 4096, // Buffer before writing
    sync: false, // Asynchronous logging
    append: true
  })
)
