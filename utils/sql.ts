import { Utils } from '.'
import { escape } from '../db/mysql'

export const getCondition = <T extends object>(param: T) => {
  return Object.keys(param).reduce<string>((res, key, index, arr) => {
    const value = Utils.isValidKey(key, param) && param[key]
    if (value) {
      res += ` AND ${key}=${escape(value)}`
    }
    return res
  }, ` 1=1`)
}
