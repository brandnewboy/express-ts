import { MiddleWareProp } from '../types/middleware'
import { sysConfig } from '../config'
import jwt from 'jsonwebtoken'

/**
 * 根据token解析出用户信息
 */
export const getRequestInfoByToken: MiddleWareProp = (req, res, next) => {
  if (req.headers.authorization) {
    jwt.verify(
      req.headers.authorization.split(' ')[1],
      sysConfig.SECRET_KEY,
      (err, decoded) => {
        if (!err) {
          req.headers.username = (decoded as { [k in string]: string })
            .username as string
        }
        if (err) {
          console.error(err)
        }
      }
    )
  }
  next()
}
