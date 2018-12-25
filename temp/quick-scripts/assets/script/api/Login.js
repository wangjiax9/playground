(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/api/Login.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ea01cKb28xHHa2REOZ4bFjv', 'Login', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Login.js.map
        