(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/cc/DialogBattleResult.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '67e059kcM9MP7703fjurCFu', 'DialogBattleResult', __filename);
// script/cc/DialogBattleResult.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GM_1 = require("../global/GM");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DialogSource = /** @class */ (function (_super) {
    __extends(DialogSource, _super);
    function DialogSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toBack = null;
        return _this;
    }
    DialogSource.prototype.onLoad = function () {
        this.toBack.on(cc.Node.EventType.TOUCH_END, function () {
            GM_1.default.dialog.hideBattleResult();
        }, this);
    };
    __decorate([
        property(cc.Node)
    ], DialogSource.prototype, "toBack", void 0);
    DialogSource = __decorate([
        ccclass
    ], DialogSource);
    return DialogSource;
}(cc.Component));
exports.default = DialogSource;

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
        //# sourceMappingURL=DialogBattleResult.js.map
        