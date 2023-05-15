"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MD5 = exports.SECERY_KEY = void 0;
var crypto_1 = __importDefault(require("crypto"));
exports.SECERY_KEY = 'WJUGHN_yhfbYHBGT789564852_7898515^';
function MD5(value) {
    var md5 = crypto_1.default.createHash('md5');
    var res;
    res = md5.update(value).digest('hex');
    return res;
}
exports.MD5 = MD5;
//# sourceMappingURL=ctypt.js.map