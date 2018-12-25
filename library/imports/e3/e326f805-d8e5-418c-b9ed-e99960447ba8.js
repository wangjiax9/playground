"use strict";
cc._RF.push(module, 'e326fgF2OVBjLnt6ZlgRHuo', 'DialogManager');
// script/global/DialogManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 弹框管理
 */
var DialogManager = /** @class */ (function () {
    function DialogManager() {
        /**
         * 登录框
         */
        this.dialogLogin = null;
        /**
         * 角色选择框
         */
        this.dialogRoleSelect = null;
        /**
         * 来源框
         */
        this.dialogSource = null;
        /**
         * 回收框
         */
        this.dialogRecycle = null;
        /**
         * 祈祷神力选择框
         */
        this.dialogJoinPray = null;
        /**
         * 战斗框
         */
        this.dialogBattle = null;
        /**
         * 战斗结果框
         */
        this.dialogBattleResult = null;
    }
    /**
     * 显示登录弹框
     */
    DialogManager.prototype.showLogin = function () {
        this.dialogLogin.runAction(cc.fadeIn(0.5));
    };
    /**
     * 隐藏登录弹框
     */
    DialogManager.prototype.hideLogin = function () {
        var ac = cc.sequence(cc.delayTime(0.5), cc.fadeOut(0.5), cc.moveBy(0, cc.v2(1000, 0)) // 防止点击遮挡
        );
        this.dialogLogin.runAction(ac);
    };
    /**
     * 显示选择角色弹框
     */
    DialogManager.prototype.showRoleSelect = function () {
        var ac = cc.sequence(cc.scaleTo(0, 0.1, 0.1), cc.moveTo(0, cc.v2(375, 600)), cc.scaleTo(0.5, 1, 1));
        ac.easing(cc.easeOut(3.0));
        this.dialogRoleSelect.runAction(ac);
    };
    /**
     * 隐藏选择角色弹框
     */
    DialogManager.prototype.hideRoleSelect = function () {
        this.dialogRoleSelect.runAction(cc.fadeOut(0.5));
    };
    /**
     * 显示资源弹框
     */
    DialogManager.prototype.showSource = function () {
        var ac = cc.sequence(cc.moveTo(0, cc.v2(0, -800)), cc.moveBy(0.2, cc.v2(0, 800)));
        this.dialogSource.runAction(ac);
    };
    /**
     * 隐藏资源弹框
     */
    DialogManager.prototype.hideSource = function () {
        this.dialogSource.runAction(cc.moveBy(0.2, cc.v2(0, -800)));
    };
    /**
     * 显示回收弹框
     */
    DialogManager.prototype.showRecycle = function () {
        var ac = cc.sequence(cc.moveTo(0, cc.v2(0, -800)), cc.moveBy(0.2, cc.v2(0, 800)));
        this.dialogRecycle.runAction(ac);
    };
    /**
     * 隐藏回收弹框
     */
    DialogManager.prototype.hideRecycle = function () {
        this.dialogRecycle.runAction(cc.moveBy(0.2, cc.v2(0, -800)));
    };
    /**
     * 显示祈祷神力选择框
     */
    DialogManager.prototype.showJoinPray = function () {
        var ac = cc.sequence(cc.scaleTo(0, 0.1, 0.1), cc.moveTo(0, cc.v2(375, 667)), cc.scaleTo(0.5, 1, 1));
        ac.easing(cc.easeOut(3.0));
        this.dialogJoinPray.runAction(ac);
    };
    /**
     * 隐藏祈祷神力选择框
     */
    DialogManager.prototype.hideJoinPray = function () {
        var ac = cc.sequence(cc.scaleTo(0, 0.1, 0.1), cc.moveBy(0.2, cc.v2(0, 2000)));
        this.dialogJoinPray.runAction(ac);
    };
    /**
     * 显示战斗弹框
     */
    DialogManager.prototype.showBattle = function () {
        var ac = cc.sequence(cc.moveTo(0, cc.v2(0, -800)), cc.moveBy(0.2, cc.v2(0, 800)));
        this.dialogBattle.runAction(ac);
    };
    /**
     * 隐藏战斗弹框
     */
    DialogManager.prototype.hideBattle = function () {
        this.dialogBattle.runAction(cc.moveBy(0.2, cc.v2(0, -800)));
    };
    /**
   * 显示战斗结果弹框
   */
    DialogManager.prototype.showBattleResult = function () {
        var ac = cc.sequence(cc.moveTo(0, cc.v2(-800, 667)), cc.moveTo(0.2, cc.v2(375, 667)));
        this.dialogBattleResult.runAction(ac);
    };
    /**
     * 隐藏战斗结果弹框
     */
    DialogManager.prototype.hideBattleResult = function () {
        this.dialogBattleResult.runAction(cc.moveBy(0.2, cc.v2(1000, 667)));
    };
    return DialogManager;
}());
exports.default = DialogManager;

cc._RF.pop();