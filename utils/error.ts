import { Express } from 'express'
import createError, { HttpError } from 'http-errors'
import { Result } from '../res/result'

/**
 * 捕获404并进行处理
 * @param app express实例
 */
export const handle404 = (app: Express) => {
  app.use((req, res) => {
    // set locals, only providing error in development
    const err: HttpError = createError()
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(404)
    res.json(Result.error('Your url or method is error!', 404))
  })
}
