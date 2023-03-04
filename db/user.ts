import { UserList } from '../types/db'
import { runSQL } from './mysql'

export const getUserList = async () => {
  const sql = `
  SELECT * FROM users
  `

  const data = await runSQL<UserList>(sql)
  return data
}
