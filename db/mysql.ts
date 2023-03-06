import { dbConfig } from '../config'
import mysql from 'mysql'

const connection = mysql.createConnection(dbConfig)

connection.connect()

export const escape = mysql.escape

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
