(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/api/Index.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '80962S6eHlATb9Oab5QxnZu', 'Index', __filename);
// script/api/Index.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Http_1 = require("../utils/Http");
/**
 * 获取来源列表
 */
function fetchGainList(params) {
    return Http_1.default.request({
        url: "/gain/list",
        method: 'post',
        data: params
    });
}
exports.fetchGainList = fetchGainList;
/**
 * 获取神力
 * @param params
 */
function gainPower(params) {
    return Http_1.default.request({
        url: '/gain/power',
        method: 'post',
        data: params
    });
}
exports.gainPower = gainPower;
/**
 * 获取所有祈祷
 */
function fetchPrayList() {
    return Http_1.default.request({
        url: '/pray/list',
        method: 'get'
    });
}
exports.fetchPrayList = fetchPrayList;
/**
 * 参与祈祷
 * @param params
 */
function prayPower(params) {
    return Http_1.default.request({
        url: '/pray/join',
        method: 'post',
        data: params
    });
}
exports.prayPower = prayPower;

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
        //# sourceMappingURL=Index.js.map
        