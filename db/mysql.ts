import config from '../config'
import mysql from 'mysql'

const connection = mysql.createConnection(config.dbConfig)

connection.connect()

export const runSQL = <T = any>(sql: string) => {
  return new Promise<T>((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}
