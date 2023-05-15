"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
__exportStar(require("./error"), exports);
__exportStar(require("./logger"), exports);
__exportStar(require("./token"), exports);
__exportStar(require("./ctypt"), exports);
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * 深拷贝
     * @param obj
     * @returns
     */
    Utils.deepClone = function (obj) {
        if (typeof obj !== 'object' || obj === null)
            return obj;
        var res;
        if (Array.isArray(obj)) {
            res = [];
        }
        else {
            res = {};
        }
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                res[key] = this.deepClone(obj[key]);
            }
        }
        return res;
    };
    /**
     * 清除对象中无效的参数
     * @param obj
     * @returns
     */
    Utils.cleanObject = function (obj) {
        var _this = this;
        if (typeof obj !== 'object')
            return obj;
        var newObj = this.deepClone(obj);
        return Object.keys(obj).reduce(function (res, key) {
            var value = _this.isValidKey(key, obj) && newObj[key];
            if (value && value !== 0) {
                res[key] = value;
            }
            return res;
        }, {});
    };
    /**
     * 验证指定键值在指定对象中是否合法
     * @param key
     * @param object
     * @returns
     */
    Utils.isValidKey = function (key, object) {
        return key in object;
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=index.js.map