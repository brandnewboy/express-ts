"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
var express_1 = require("express");
var blog_1 = require("../controller/blog");
var router = (0, express_1.Router)();
router.get('/list', blog_1.blogController.getBlog);
router.post('/add', blog_1.blogController.addBlog);
exports.blogRouter = router;
//# sourceMappingURL=blog.js.map