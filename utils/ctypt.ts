import crypto from 'crypto'

export const SECERY_KEY = 'WJUGHN_yhfbYHBGT789564852_7898515^'
export function MD5(value: string) {
  const md5 = crypto.createHash('md5')
  let res

  res = md5.update(value).digest('hex')

  return res
}
