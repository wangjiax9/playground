(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/cc/UiCC.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0c950n+09ZE77P6ROkRWSoZ', 'UiCC', __filename);
// script/cc/UiCC.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GM_1 = require("../global/GM");
var Const_1 = require("../utils/Const");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UiCC = /** @class */ (function (_super) {
    __extends(UiCC, _super);
    function UiCC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 用户信息
         */
        _this.user = null;
        /**
        * 角色
        */
        _this.role = null;
        /**
         * 来源按钮
         */
        _this.btnSource = null;
        /**
         * 回收按钮
         */
        _this.btnRecycle = null;
        /**
         * 战斗按钮
         */
        _this.btnBattle = null;
        return _this;
    }
    UiCC.prototype.onLoad = function () {
        this.initUserInfo();
        this.eventHandle();
    };
    /**
     * 初始化用户信息
     */
    UiCC.prototype.initUserInfo = function () {
        var userNode = cc.instantiate(GM_1.default.resManager.prefab.user);
        this.node.addChild(userNode);
        userNode.setPosition(0, 200);
        GM_1.default.userNode = userNode;
        this.roleAnim();
        var accountId = cc.find('user/name', this.node);
        var godCamp = cc.find('user/godCamp/godCampLabel', this.node);
        var lv = cc.find('user/lv/label', this.node);
        var stPower = cc.find('user/power/st-num', this.node);
        var dxPower = cc.find('user/power/dx-num', this.node);
        var itPower = cc.find('user/power/it-num', this.node);
        accountId.getComponent(cc.Label).string = GM_1.default.user.accountId;
        godCamp.getComponent(cc.Label).string = Const_1.godCn(GM_1.default.user.godCamp);
        lv.getComponent(cc.Label).string = 'LV: ' + Const_1.godLv(GM_1.default.user.godLevel);
        stPower.getComponent(cc.Label).string = GM_1.default.user.powerStrength.toFixed(1);
        dxPower.getComponent(cc.Label).string = GM_1.default.user.powerDexterity.toFixed(1);
        itPower.getComponent(cc.Label).string = GM_1.default.user.powerIntelligence.toFixed(1);
    };
    UiCC.prototype.roleAnim = function () {
        this.role.getComponent(cc.Sprite).spriteFrame = GM_1.default.resManager.texture[Const_1.roleTextureName(GM_1.default.user.godCamp)];
        var ac = cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, 20)), cc.moveBy(1, cc.v2(0, -20))));
        ac.easing(cc.easeInOut(2));
        this.role.runAction(ac);
    };
    /**
     * 事件处理
     */
    UiCC.prototype.eventHandle = function () {
        this.btnSource.on(cc.Node.EventType.TOUCH_END, function () {
            GM_1.default.dialog.showSource();
        }, this);
        this.btnRecycle.on(cc.Node.EventType.TOUCH_END, function () {
            GM_1.default.dialog.showRecycle();
        }, this);
        this.btnBattle.on(cc.Node.EventType.TOUCH_END, function () {
            GM_1.default.dialog.showBattle();
        }, this);
        // 来源关闭按钮
        var closeNodeSource = cc.find('close', GM_1.default.dialog.dialogSource);
        // 回收关闭按钮
        var closeNodeRecycle = cc.find('close', GM_1.default.dialog.dialogRecycle);
        closeNodeSource.on(cc.Node.EventType.TOUCH_END, function () {
            GM_1.default.dialog.hideSource();
        }, this);
        closeNodeRecycle.on(cc.Node.EventType.TOUCH_END, function () {
            GM_1.default.dialog.hideRecycle();
        }, this);
    };
    __decorate([
        property(cc.Node)
    ], UiCC.prototype, "user", void 0);
    __decorate([
        property(cc.Node)
    ], UiCC.prototype, "role", void 0);
    __decorate([
        property(cc.Node)
    ], UiCC.prototype, "btnSource", void 0);
    __decorate([
        property(cc.Node)
    ], UiCC.prototype, "btnRecycle", void 0);
    __decorate([
        property(cc.Node)
    ], UiCC.prototype, "btnBattle", void 0);
    UiCC = __decorate([
        ccclass
    ], UiCC);
    return UiCC;
}(cc.Component));
exports.default = UiCC;

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
        //# sourceMappingURL=UiCC.js.map
        