"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle404 = void 0;
var http_errors_1 = __importDefault(require("http-errors"));
var result_1 = require("../res/result");
/**
 * 捕获404并进行处理
 * @param app express实例
 */
var handle404 = function (app) {
    app.use(function (req, res) {
        // set locals, only providing error in development
        var err = (0, http_errors_1.default)();
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        // render the error page
        res.status(404);
        res.json(result_1.Result.error('Your url or method is error!', 404));
    });
};
exports.handle404 = handle404;
//# sourceMappingURL=error.js.map