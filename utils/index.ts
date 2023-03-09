export * from './error'
export * from './logger'
export * from './token'
export * from './ctypt'

export class Utils {
  /**
   * 深拷贝
   * @param obj
   * @returns
   */
  public static deepClone<T = any>(obj: T) {
    if (typeof obj !== 'object' || obj === null) return obj

    let res: any
    if (Array.isArray(obj)) {
      res = []
    } else {
      res = {}
    }
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        res[key] = this.deepClone(obj[key])
      }
    }
    return res as T
  }

  /**
   * 清除对象中无效的参数
   * @param obj
   * @returns
   */
  public static cleanObject<T extends object>(obj: T) {
    if (typeof obj !== 'object') return obj
    const newObj = this.deepClone(obj)
    return Object.keys(obj).reduce<{ [k: string]: any }>((res, key) => {
      const value = this.isValidKey(key, obj) && newObj[key]
      if (value && value !== 0) {
        res[key] = value
      }
      return res
    }, {}) as T
  }

  /**
   * 验证指定键值在指定对象中是否合法
   * @param key
   * @param object
   * @returns
   */
  public static isValidKey(
    key: string | number | symbol,
    object: object
  ): key is keyof typeof object {
    return key in object
  }
}
