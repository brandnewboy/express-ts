"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileRouter = void 0;
var express_1 = require("express");
var file_1 = require("../controller/file");
var multer_1 = __importDefault(require("multer"));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'file/upload-test/');
        //文件保存路径
    },
    filename: function (req, file, cb) {
        console.log(file.originalname);
        cb(null, file.originalname);
        //存储文件名
    }
});
var upload = (0, multer_1.default)({ storage: storage });
var router = (0, express_1.Router)();
router.post('/upload', upload.single('files'), file_1.fileController.uploadFile);
exports.fileRouter = router;
//# sourceMappingURL=file.js.map