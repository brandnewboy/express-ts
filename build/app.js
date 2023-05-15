"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("express-async-errors");
var router_1 = require("./router");
var utils_1 = require("./utils");
var config_1 = require("./config");
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/file/upload', express_1.default.static(path_1.default.resolve('./file/upload-test'))); // 配置静态资源
(0, utils_1.recordLogger)(app); // 记录访问日志
(0, router_1.matchRoutes)(app); // 匹配路由
(0, utils_1.handle404)(app); // 处理404
app.listen(config_1.sysConfig.PORT, function () {
    utils_1.logger.info("App is running at http://localhost:".concat(config_1.sysConfig.PORT));
});
//# sourceMappingURL=app.js.map