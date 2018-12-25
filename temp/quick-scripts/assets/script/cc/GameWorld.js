(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/cc/GameWorld.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '05d75yM6bRLD5RI44gdYD9x', 'GameWorld', __filename);
// script/cc/GameWorld.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GM_1 = require("../global/GM");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameWorld = /** @class */ (function (_super) {
    __extends(GameWorld, _super);
    function GameWorld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 来源框
         */
        _this.dialogSource = null;
        /**
         * 回收框
         */
        _this.dialogRecycle = null;
        /**
         * 祈祷神力选择框
         */
        _this.dialogJoinPray = null;
        /**
         * 战斗框
         */
        _this.dialogBattle = null;
        /**
         * 战斗结果框
         */
        _this.dialogBattleResult = null;
        return _this;
    }
    GameWorld.prototype.onLoad = function () {
        GM_1.default.dialog.dialogSource = this.dialogSource;
        GM_1.default.dialog.dialogRecycle = this.dialogRecycle;
        GM_1.default.dialog.dialogJoinPray = this.dialogJoinPray;
        GM_1.default.dialog.dialogBattle = this.dialogBattle;
        GM_1.default.dialog.dialogBattleResult = this.dialogBattleResult;
        GM_1.default.toastNode = cc.instantiate(GM_1.default.resManager.prefab['toast']);
        this.node.addChild(GM_1.default.toastNode);
        GM_1.default.toastNode.setPosition(2000, 0);
    };
    __decorate([
        property(cc.Node)
    ], GameWorld.prototype, "dialogSource", void 0);
    __decorate([
        property(cc.Node)
    ], GameWorld.prototype, "dialogRecycle", void 0);
    __decorate([
        property(cc.Node)
    ], GameWorld.prototype, "dialogJoinPray", void 0);
    __decorate([
        property(cc.Node)
    ], GameWorld.prototype, "dialogBattle", void 0);
    __decorate([
        property(cc.Node)
    ], GameWorld.prototype, "dialogBattleResult", void 0);
    GameWorld = __decorate([
        ccclass
    ], GameWorld);
    return GameWorld;
}(cc.Component));
exports.default = GameWorld;

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
        //# sourceMappingURL=GameWorld.js.map
        