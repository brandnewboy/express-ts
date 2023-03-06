import { Express } from 'express'
import createError, { HttpError } from 'http-errors'

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
    res.status(err.status || 500)
    res.setHeader('Content-Type', 'text/html')
    res.send(`
      <h1>404 Not Found</h1>
  `)
  })
}
