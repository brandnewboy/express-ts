import { UserList } from '../types/db'
import { SearchUserListParam, UserLoginForm } from '../types/user'
import { getCondition } from '../utils/sql'
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
  WHERE username='${username}' AND password=${escape(password)}
  `
  return await runSQL<UserList>(sql)
}

/**
 * 获取用户列表
 * @returns 用户列表
 */
const getUserList = async (param: SearchUserListParam) => {
  const condition = getCondition<SearchUserListParam>(param)
  const sql = `
  SELECT id, username, realname FROM users
  WHERE ${condition}
  `
  return await runSQL<UserList>(sql)
}

export const userDB = {
  getUserList,
  getUserInfo
}
