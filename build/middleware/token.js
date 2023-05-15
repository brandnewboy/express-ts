"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestInfoByToken = void 0;
var config_1 = require("../config");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/**
 * 根据token解析出用户信息
 */
var getRequestInfoByToken = function (req, res, next) {
    if (req.headers.authorization) {
        jsonwebtoken_1.default.verify(req.headers.authorization.split(' ')[1], config_1.sysConfig.SECRET_KEY, function (err, decoded) {
            if (!err) {
                req.headers.username = decoded
                    .username;
            }
            if (err) {
                console.error(err);
            }
        });
    }
    next();
};
exports.getRequestInfoByToken = getRequestInfoByToken;
//# sourceMappingURL=token.js.map