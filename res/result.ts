import { Code, CodeMsg } from './code'

/**
 * 统一响应结果
 */
export class Result<T = unknown> {
  public code: number
  public msg: string
  public data?: T

  constructor(code: number, msg: string)
  constructor(code: number, msg: string, data: T)
  constructor(arg1: number, arg2: string, arg3?: T) {
    if (arg3) {
      this.data = arg3
    }
    this.code = arg1
    this.msg = arg2
  }

  public static ok(msg?: string): Result
  public static ok<T>(msg?: string, data?: T): Result
  public static ok<T = any>(arg1?: string, arg2?: T) {
    const res = arg2
      ? new Result<T>(Code.success, CodeMsg.success, arg2)
      : new Result<T>(Code.success, CodeMsg.success)
    if (arg1) res.msg = arg1
    return res
  }

  public static error(msg?: string) {
    const res = new Result(Code.error, CodeMsg.error)
    if (msg) res.msg = msg
  }
}
