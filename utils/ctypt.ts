import crypto from 'crypto'

const md5 = crypto.createHash('md5')
export const SECERY_KEY = 'WJUGHN_yhfbYHBGT789564852_7898515^'
export function MD5(value: string) {
  return md5.update(value).digest('hex')
}
