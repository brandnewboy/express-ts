"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtAuth = exports.generateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var express_jwt_1 = require("express-jwt");
var config_1 = require("../config");
var generateToken = function (userInfo) {
    var token = jsonwebtoken_1.default.sign(userInfo, config_1.sysConfig.SECRET_KEY, {
        expiresIn: config_1.sysConfig.TOKEN_EXPIRES
    });
    return token;
};
exports.generateToken = generateToken;
exports.jwtAuth = (0, express_jwt_1.expressjwt)({
    secret: config_1.sysConfig.SECRET_KEY,
    algorithms: ['HS256']
}).unless({
    path: [
        '/api/v1/user/test',
        '/api/v1/user/refresh-token',
        '/api/v1/user/login',
        '/api/v1/file/upload'
    ]
});
//# sourceMappingURL=token.js.map