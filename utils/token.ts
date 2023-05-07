import jwt from 'jsonwebtoken'
import { expressjwt } from 'express-jwt'
import { sysConfig } from '../config'
export const generateToken = (userInfo: any) => {
  const token = jwt.sign(userInfo, sysConfig.SECRET_KEY, {
    expiresIn: sysConfig.TOKEN_EXPIRES
  })

  return token
}

export const jwtAuth = expressjwt({
  secret: sysConfig.SECRET_KEY,
  algorithms: ['HS256']
}).unless({
  path: [
    '/api/v1/user/test',
    '/api/v1/user/refresh-token',
    '/api/v1/user/login',
    '/api/v1/file/upload'
  ]
})
