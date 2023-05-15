"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchRoutes = void 0;
var express_1 = require("express");
var user_1 = require("./user");
var blog_1 = require("./blog");
var file_1 = require("./file");
var utils_1 = require("../utils");
var token_1 = require("../middleware/token");
var router = (0, express_1.Router)();
router.use(utils_1.jwtAuth); // token验证
router.use(token_1.getRequestInfoByToken);
router.use('/user', user_1.userRouter);
router.use('/blog', blog_1.blogRouter);
router.use('/file', file_1.fileRouter);
var matchRoutes = function (app) {
    app.use('/api/v1', router);
};
exports.matchRoutes = matchRoutes;
//# sourceMappingURL=index.js.map