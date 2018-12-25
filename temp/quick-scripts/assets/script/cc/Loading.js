(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/cc/Loading.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '81514WXKFdLm4R0WfMFNjF9', 'Loading', __filename);
// script/cc/Loading.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GM_1 = require("../global/GM");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progress = null;
        _this.isSwitching = false;
        return _this;
    }
    Loading.prototype.onLoad = function () {
        GM_1.default.resManager.load();
        // GM.switchScene('login')
    };
    Loading.prototype.update = function () {
        if (GM_1.default.resManager.getCurPer() < 100) {
            // 加载进度
            this.progress.getComponent(cc.Label).string = GM_1.default.resManager.getCurPer() + '%';
        }
        if (GM_1.default.resManager.getCurPer() >= 100 && !this.isSwitching) {
            this.isSwitching = true;
            GM_1.default.switchScene('login');
        }
    };
    __decorate([
        property(cc.Node)
    ], Loading.prototype, "progress", void 0);
    Loading = __decorate([
        ccclass
    ], Loading);
    return Loading;
}(cc.Component));
exports.default = Loading;

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
        //# sourceMappingURL=Loading.js.map
        