"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDB = void 0;
var sql_1 = require("../utils/sql");
var mysql_1 = require("./mysql");
/**
 * 查询用户
 * @param param0 用户信息
 * @returns
 */
var getUserInfo = function (_a) {
    var username = _a.username, password = _a.password;
    return __awaiter(void 0, void 0, void 0, function () {
        var sql;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sql = "\n  SELECT realname\n  FROM users\n  WHERE username=".concat(username, " AND password=").concat((0, mysql_1.escape)(password), "\n  ");
                    return [4 /*yield*/, (0, mysql_1.runSQL)(sql)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
/**
 * 获取用户列表
 * @returns 用户列表
 */
var getUserList = function (param) { return __awaiter(void 0, void 0, void 0, function () {
    var condition, sql;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                condition = (0, sql_1.getCondition)(param);
                sql = "\n  SELECT id, username, realname FROM users\n  WHERE ".concat(condition, "\n  ");
                return [4 /*yield*/, (0, mysql_1.runSQL)(sql)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.userDB = {
    getUserList: getUserList,
    getUserInfo: getUserInfo
};
//# sourceMappingURL=user.js.map