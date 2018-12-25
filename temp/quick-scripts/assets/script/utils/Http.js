(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/utils/Http.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6e3d7LdvvNN/LuqksnkPeIJ', 'Http', __filename);
// script/utils/Http.ts

Object.defineProperty(exports, "__esModule", { value: true });
// mock
var baseUrl = 'https://easy-mock.com/mock/5c191e7313c0eb6355d2efec';
// const baseUrl = ''
/**
 * HTTP请求
 * 导出一个单例
 * 封装了get和post方法
 */
var Http = /** @class */ (function () {
    function Http() {
    }
    Http.getInstance = function () {
        if (this.instance instanceof this === false) {
            this.instance = new this();
        }
        return this.instance;
    };
    /**
     * 发送请求
     * @param config 配置
     */
    Http.prototype.request = function (config) {
        return new Promise(function (resolve, reject) {
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.open(config.method, "" + baseUrl + config.url);
            xhr.timeout = 5000;
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var json = JSON.parse(xhr.responseText);
                    resolve(json);
                }
            };
            var data = config.data ? JSON.stringify(config.data) : '';
            xhr.send(data);
        });
    };
    return Http;
}());
exports.default = Http.getInstance();

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
        //# sourceMappingURL=Http.js.map
        