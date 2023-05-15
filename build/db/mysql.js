"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSQL = exports.escape = void 0;
var config_1 = require("../config");
var mysql_1 = __importDefault(require("mysql"));
var connection = mysql_1.default.createConnection(config_1.dbConfig);
connection.connect();
exports.escape = mysql_1.default.escape;
/**
 * 执行sql
 * @param sql sql语句
 * @returns 查询结果
 */
var runSQL = function (sql) {
    return new Promise(function (resolve, reject) {
        connection.query(sql, function (err, result) {
            if (err) {
                console.error(err);
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
};
exports.runSQL = runSQL;
//# sourceMappingURL=mysql.js.map