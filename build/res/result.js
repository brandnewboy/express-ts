"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
var code_1 = require("./code");
/**
 * 统一响应结果
 */
var Result = /** @class */ (function () {
    function Result(arg1, arg2, arg3) {
        if (arg3)
            this.data = arg3;
        this.code = arg1;
        this.msg = arg2;
    }
    Result.ok = function (data) {
        return data
            ? new Result(code_1.Code.success, code_1.CodeMsg.success, data)
            : new Result(code_1.Code.success, code_1.CodeMsg.success);
    };
    Result.error = function (arg1, arg2) {
        var res = typeof arg1 === 'string'
            ? new Result(code_1.Code.error, arg1)
            : typeof arg1 === 'number'
                ? new Result(arg1, code_1.CodeMsg.error)
                : new Result(code_1.Code.error, code_1.CodeMsg.error);
        if (arg2)
            res.code = arg2;
        return res;
    };
    return Result;
}());
exports.Result = Result;
//# sourceMappingURL=result.js.map