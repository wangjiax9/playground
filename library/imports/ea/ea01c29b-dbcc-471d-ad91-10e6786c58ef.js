"use strict";
cc._RF.push(module, 'ea01cKb28xHHa2REOZ4bFjv', 'Login');
// script/api/Login.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Http_1 = require("../utils/Http");
function login(params) {
    return Http_1.default.request({
        url: '/login',
        method: 'post',
        data: params
    });
}
exports.login = login;
function register(params) {
    return Http_1.default.request({
        url: '/register',
        method: 'post',
        data: params
    });
}
exports.register = register;

cc._RF.pop();