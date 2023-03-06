import { UserList } from '../types/db'
import { UserLoginForm } from '../types/user'
import { runSQL, escape } from './mysql'

/**
 * 查询用户
 * @param param0 用户信息
 * @returns
 */
const getUserInfo = async ({ username, password }: UserLoginForm) => {
  const sql = `
  SELECT realname
  FROM users
  WHERE username=${escape(username)} AND password=${escape(password)}
  `
  const data = await runSQL<UserList>(sql)
  return data
}

/**
 * 获取用户列表
 * @returns 用户列表
 */
const getUserList = async () => {
  const sql = `
  SELECT * FROM users
  `
  const data = await runSQL<UserList>(sql)
  return data
}

export default {
  getUserList,
  getUserInfo
}
