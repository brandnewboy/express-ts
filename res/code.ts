enum Code {
  success,
  denied,
  error
}

enum CodeMsg {
  success = '请求成功',
  denied = '无权限',
  error = '系统异常'
}

type CodeType = keyof typeof Code

export { Code, CodeMsg, CodeType }
