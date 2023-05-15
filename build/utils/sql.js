"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCondition = void 0;
var _1 = require(".");
var mysql_1 = require("../db/mysql");
/**
 * 根据参数对象获取sql条件条件语句
 * @param param 搜索条件参数对象
 * @returns sql条件语句
 */
var getCondition = function (param) {
    return Object.keys(param).reduce(function (res, key, index, arr) {
        var value = _1.Utils.isValidKey(key, param) && param[key];
        if (value) {
            // escape(value)
            res += " AND ".concat(key, "=").concat((0, mysql_1.escape)(value));
        }
        return res;
    }, " 1=1");
};
exports.getCondition = getCondition;
//# sourceMappingURL=sql.js.map