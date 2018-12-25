(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/cc/DialogBattle.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8fda1nmbwpGi6Td2QlKWs6R', 'DialogBattle', __filename);
// script/cc/DialogBattle.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GM_1 = require("../global/GM");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DialogSource = /** @class */ (function (_super) {
    __extends(DialogSource, _super);
    function DialogSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toBattle = null;
        _this.BattleClose = null;
        _this.isBattle = false;
        return _this;
    }
    DialogSource.prototype.onLoad = function () {
        var _this = this;
        this.toBattle.on(cc.Node.EventType.TOUCH_END, function () {
            if (_this.isBattle)
                return;
            _this.isBattle = true;
            GM_1.default.toast('战斗中……');
            _this.schedule(function () {
                GM_1.default.dialog.showBattleResult();
            }, 0, 0, 2);
        }, this);
        this.BattleClose.on(cc.Node.EventType.TOUCH_END, function () {
            GM_1.default.dialog.hideBattle();
        }, this);
    };
    __decorate([
        property(cc.Node)
    ], DialogSource.prototype, "toBattle", void 0);
    __decorate([
        property(cc.Node)
    ], DialogSource.prototype, "BattleClose", void 0);
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
        //# sourceMappingURL=DialogBattle.js.map
        