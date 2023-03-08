import { dbConfig } from '../config'
import mysql from 'mysql'

const connection = mysql.createConnection(dbConfig)
connection.connect()
export const escape = mysql.escape

/**
 * 执行sql
 * @param sql sql语句
 * @returns 查询结果
 */
export const runSQL = <T = any>(sql: string) => {
  return new Promise<T>((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        console.error(err)
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}
