"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.recordLogger = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var morgan_1 = __importDefault(require("morgan"));
var pino_1 = __importDefault(require("pino"));
var dayjs_1 = __importDefault(require("dayjs"));
var IS_DEV = process.env.NODE_ENV === 'development';
var recordLogger = function (app) {
    if (IS_DEV) {
        app.use((0, morgan_1.default)('dev'));
    }
    else {
        var filePath = path_1.default.join(__dirname, '..', 'logs', 'access.log');
        console.log(filePath);
        var writeStream = fs_1.default.createWriteStream(filePath, { flags: 'a' });
        app.use((0, morgan_1.default)('combined', {
            stream: writeStream
        }));
    }
};
exports.recordLogger = recordLogger;
exports.logger = (0, pino_1.default)({
    transport: {
        // pino 7.x的写法有所不同
        target: 'pino-pretty'
    },
    base: {
        pid: false
    },
    timestamp: function () { return ",\"time\":\"".concat((0, dayjs_1.default)().format(), "\""); }
});
//# sourceMappingURL=logger.js.map