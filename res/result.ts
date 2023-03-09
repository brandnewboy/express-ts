import { Code, CodeMsg, CodeType } from './code'

/**
 * 统一响应结果
 */
export class Result<T> {
  public code: number
  public msg: string
  public data?: T

  constructor(code: number, msg: string)
  constructor(code: number, msg: string, data: T)
  constructor(arg1: number, arg2: string, arg3?: T) {
    if (arg3) this.data = arg3
    this.code = arg1
    this.msg = arg2
  }

  public static ok(): Result<null>
  public static ok<R>(data: R): Result<R>
  public static ok<R = any>(data?: R): Result<null> | Result<R> {
    return data
      ? new Result<R>(Code.success, CodeMsg.success, data)
      : new Result<R>(Code.success, CodeMsg.success)
  }

  public static error(msg: string): Result<null>
  public static error(code: number): Result<null>
  public static error(msg: string, code: number): Result<null>
  public static error(arg1: string | number, arg2?: number) {
    const res =
      typeof arg1 === 'string'
        ? new Result<null>(Code.error, arg1)
        : typeof arg1 === 'number'
        ? new Result<null>(arg1, CodeMsg.error)
        : new Result<null>(Code.error, CodeMsg.error)
    if (arg2) res.code = arg2
    return res
  }
}
