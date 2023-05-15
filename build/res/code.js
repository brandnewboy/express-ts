"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeMsg = exports.Code = void 0;
var Code;
(function (Code) {
    Code[Code["success"] = 200] = "success";
    Code[Code["unauthorized"] = 401] = "unauthorized";
    Code[Code["denied"] = 403] = "denied";
    Code[Code["error"] = 500] = "error";
})(Code || (Code = {}));
exports.Code = Code;
var CodeMsg;
(function (CodeMsg) {
    CodeMsg["success"] = "\u8BF7\u6C42\u6210\u529F";
    CodeMsg["unauthorized"] = "\u672A\u6388\u6743";
    CodeMsg["denied"] = "\u65E0\u6743\u9650";
    CodeMsg["error"] = "\u8BF7\u6C42\u5931\u8D25";
})(CodeMsg || (CodeMsg = {}));
exports.CodeMsg = CodeMsg;
//# sourceMappingURL=code.js.map