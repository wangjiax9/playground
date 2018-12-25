(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/global/GM.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1365afd9Q9KSYaewiDhKfxn', 'GM', __filename);
// script/global/GM.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResManager_1 = require("./ResManager");
var DialogManager_1 = require("./DialogManager");
/**
 * 游戏管理
 */
var GM = /** @class */ (function () {
    function GM() {
        /**
         * 资源管理
         */
        this.resManager = null;
        /**
         * 弹框管理
         */
        this.dialog = null;
        /**
         * 消息框节点
         */
        this.toastNode = null;
        /**
         * 是否登录
         */
        this.isLogin = false;
        /**
         * 用户信息
         */
        this.user = {};
        /**
         * 用户节点
         */
        this.userNode = null;
        /**
         * 参与祈祷的活动
         */
        this.joinPrayItem = {};
        /**
         * 参与祈祷的活动节点
         */
        this.joinPrayItemNode = null;
        this.init();
    }
    GM.getInstance = function () {
        if (this.instance instanceof this === false) {
            this.instance = new this();
        }
        return this.instance;
    };
    /**
     * 初始化
     */
    GM.prototype.init = function () {
        this.resManager = new ResManager_1.default();
        this.dialog = new DialogManager_1.default();
    };
    /**
     * 切换场景
     * @param scene 场景名
     */
    GM.prototype.switchScene = function (scene) {
        cc.director.loadScene(scene);
    };
    GM.prototype.setUser = function (res) {
        this.user = res.data;
    };
    GM.prototype.updateUserPower = function () {
        var stPower = cc.find('power/st-num', this.userNode);
        var dxPower = cc.find('power/dx-num', this.userNode);
        var itPower = cc.find('power/it-num', this.userNode);
        stPower.getComponent(cc.Label).string = this.user.powerStrength.toFixed(1);
        dxPower.getComponent(cc.Label).string = this.user.powerDexterity.toFixed(1);
        itPower.getComponent(cc.Label).string = this.user.powerIntelligence.toFixed(1);
    };
    /**
     * toast消息框
     * @param msg
     */
    GM.prototype.toast = function (msg) {
        var msgNode = cc.find('msg', this.toastNode);
        msgNode.getComponent(cc.Label).string = msg;
        var ac = cc.sequence(cc.fadeIn(0), cc.scaleTo(0, 0.1, 0.1), cc.moveTo(0, cc.v2(0, 200)), cc.scaleTo(0.5, 1, 1), cc.delayTime(1.5), cc.fadeOut(0.5), cc.moveTo(0, cc.v2(800, 800)));
        ac.easing(cc.easeOut(3.0));
        this.toastNode.runAction(ac);
        cc.log(this.toastNode);
    };
    return GM;
}());
exports.default = GM.getInstance();

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
        //# sourceMappingURL=GM.js.map
        