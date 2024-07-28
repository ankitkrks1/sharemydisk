"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serve_index_1 = __importDefault(require("serve-index")); // this package is used to server folder like filemanager
const getPort_1 = __importDefault(require("./utils/getPort"));
const getDirectory_1 = __importDefault(require("./utils/getDirectory"));
const getIP_1 = __importDefault(require("./utils/getIP"));
const app = (0, express_1.default)();
const port = (0, getPort_1.default)(process.argv);
const location = (0, getDirectory_1.default)(process.argv);
//Servers the Ftp type files stores in Files Folder
app.use('/', express_1.default.static(location), (0, serve_index_1.default)(location));
// app.use('/', express.static('./scr'))
const sharemydisk = () => {
    app.listen(port, () => {
        console.log('server is up', 'http://' + (0, getIP_1.default)() + ':' + port);
    });
};
exports.default = sharemydisk;
