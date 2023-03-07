enum Code {
  success = 200,
  unauthorized = 401,
  denied = 403,
  error = 500
}

enum CodeMsg {
  success = '请求成功',
  unauthorized = '未授权',
  denied = '无权限',
  error = '请求失败'
}

type CodeType = keyof typeof Code

export { Code, CodeMsg, CodeType }
