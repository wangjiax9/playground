(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/cc/GodSelection.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f634fIkQJNB0oXnL0pn9Zo6', 'GodSelection', __filename);
// script/cc/GodSelection.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GM_1 = require("../global/GM");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GodSelection = /** @class */ (function (_super) {
    __extends(GodSelection, _super);
    function GodSelection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.border = null;
        return _this;
    }
    GodSelection.prototype.onLoad = function () {
        this.border = cc.find('border', this.node);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    /**
     * 触屏开始
     */
    GodSelection.prototype.onTouchStart = function (e) {
        this.border.runAction(cc.fadeIn(0.2));
        var ac = cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.02, 1.02), cc.scaleTo(1, 0.99, 0.99)));
        ac.easing(cc.easeInOut(2));
        this.border.runAction(ac);
    };
    /**
     * 触屏移动
     */
    GodSelection.prototype.onTouchMove = function (e) {
        // this.node.runAction(cc.scaleTo(0.2, 1, 1))
    };
    /**
     * 触屏结束
     */
    GodSelection.prototype.onTouchEnd = function (e) {
        var target = e.target;
        GM_1.default.user.role = target.name;
        // this.node.runAction(cc.scaleTo(0.2, 1.1, 1.1))
    };
    GodSelection = __decorate([
        ccclass
    ], GodSelection);
    return GodSelection;
}(cc.Component));
exports.default = GodSelection;

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
        //# sourceMappingURL=GodSelection.js.map
        