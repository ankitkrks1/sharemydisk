"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getHttps_1 = __importDefault(require("./getHttps"));
exports.default = (arg) => {
    if (arg.indexOf('-p') !== -1) {
        return parseInt(arg[arg.indexOf('-p') + 1]);
    }
    else {
        if ((0, getHttps_1.default)(arg)) {
            console.log('Secure Mode selected , Https port is 443.');
            return 443;
        }
        else {
            console.log('switching to default port :-  3000');
            return 3000;
        }
    }
};
