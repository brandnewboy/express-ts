"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = require("express");
var user_1 = require("../controller/user");
var validator_1 = require("../middleware/validator");
var router = (0, express_1.Router)();
router.get('/list', user_1.userController.getUserList);
router.get('/test', user_1.userController.test);
router.post('/login', validator_1.validateForm, user_1.userController.userLogin);
exports.userRouter = router;
//# sourceMappingURL=user.js.map