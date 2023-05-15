"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLoginForm = void 0;
var validateLoginForm = function (formData) {
    var username = formData.username, password = formData.password;
    if (!username || !password)
        return false;
    return true;
};
exports.validateLoginForm = validateLoginForm;
//# sourceMappingURL=validator.js.map