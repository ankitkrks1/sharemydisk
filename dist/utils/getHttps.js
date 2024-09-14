"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (arg) => {
    if (arg.indexOf('-s') !== -1) {
        return true;
    }
    else {
        console.log('switching to default http');
        return false;
    }
};
