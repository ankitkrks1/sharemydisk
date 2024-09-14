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
const getHttps_1 = __importDefault(require("./utils/getHttps"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = (0, getPort_1.default)(process.argv);
const location = (0, getDirectory_1.default)(process.argv);
const isHttps = (0, getHttps_1.default)(process.argv);
//Servers the Ftp type files stores in Files Folder
app.use('/', express_1.default.static(location), (0, serve_index_1.default)(location));
// app.use('/', express.static('./scr'))
let sharemydisk = () => { };
if (isHttps) {
    // Read the SSL certificate and key
    const sslOptions = {
        key: fs_1.default.readFileSync(path_1.default.join(__dirname, '../cert/server.key')),
        cert: fs_1.default.readFileSync(path_1.default.join(__dirname, '../cert/server.cert')),
    };
    sharemydisk = () => {
        const url = 'https://' + (0, getIP_1.default)() + ':' + (0, getPort_1.default)(process.argv);
        https_1.default.createServer(sslOptions, app).listen((0, getPort_1.default)(process.argv), () => {
            console.log('server is up', url);
        });
    };
}
else {
    sharemydisk = () => {
        app.listen(port, () => {
            console.log('server is up', 'http://' + (0, getIP_1.default)() + ':' + port);
        });
    };
}
exports.default = sharemydisk;
