"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateForm = void 0;
var validator_1 = require("../utils/validator");
var validateForm = function (req, res, next) {
    var _a = req.body, username = _a.username, password = _a.password;
    if (!(0, validator_1.validateLoginForm)({ username: username, password: password }))
        res.json({ msg: '用户名或密码错误' });
    next();
};
exports.validateForm = validateForm;
//# sourceMappingURL=validator.js.map