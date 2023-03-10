import { Utils } from '.'
import { escape } from '../db/mysql'

/**
 * 根据参数对象获取sql条件条件语句
 * @param param 搜索条件参数对象
 * @returns sql条件语句
 */
export const getCondition = <T extends object>(param: T) => {
  return Object.keys(param).reduce<string>((res, key, index, arr) => {
    const value = Utils.isValidKey(key, param) && param[key]
    if (value) {
      res += ` AND ${key}=${escape(value)}`
    }
    return res
  }, ` 1=1`)
}
