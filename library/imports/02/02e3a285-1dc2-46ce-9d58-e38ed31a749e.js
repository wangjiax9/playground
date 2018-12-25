"use strict";
cc._RF.push(module, '02e3aKFHcJGzp1Y447TGnSe', 'DialogJoinPray');
// script/cc/DialogJoinPray.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GM_1 = require("../global/GM");
var Index_1 = require("../api/Index");
var Const_1 = require("../utils/Const");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DialogSource = /** @class */ (function (_super) {
    __extends(DialogSource, _super);
    function DialogSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item0 = null;
        _this.item1 = null;
        _this.item2 = null;
        _this.item3 = null;
        _this.btn = null;
        _this.btnClose = null;
        // 贡献的神力
        _this.devotePower = 0;
        return _this;
    }
    DialogSource.prototype.onLoad = function () {
        this.eventHandle();
    };
    DialogSource.prototype.eventHandle = function () {
        var _this = this;
        var itemActive = GM_1.default.resManager.texture['pray-b-active'];
        this.item0.on(cc.Node.EventType.TOUCH_END, function () {
            _this.disableOtherItem();
            _this.devotePower = 10;
            _this.item0.getComponent(cc.Sprite).spriteFrame = itemActive;
        }, this);
        this.item1.on(cc.Node.EventType.TOUCH_END, function () {
            _this.disableOtherItem();
            _this.devotePower = 20;
            _this.item1.getComponent(cc.Sprite).spriteFrame = itemActive;
        }, this);
        this.item2.on(cc.Node.EventType.TOUCH_END, function () {
            _this.disableOtherItem();
            _this.devotePower = 50;
            _this.item2.getComponent(cc.Sprite).spriteFrame = itemActive;
        }, this);
        this.item3.on(cc.Node.EventType.TOUCH_END, function () {
            _this.disableOtherItem();
            _this.devotePower = 100;
            _this.item3.getComponent(cc.Sprite).spriteFrame = itemActive;
        }, this);
        this.btn.on(cc.Node.EventType.TOUCH_END, function () {
            var curPower = GM_1.default.user[Const_1.powerTypeEx(GM_1.default.joinPrayItem.powerType)];
            if (_this.devotePower > curPower) {
                GM_1.default.toast('该类型神力不足');
            }
            else {
                _this.joinPray();
                _this.btn.off(cc.Node.EventType.TOUCH_START, function () { }, _this);
                _this.btn.off(cc.Node.EventType.TOUCH_END, function () { }, _this);
            }
        }, this);
        this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
            GM_1.default.dialog.hideJoinPray();
        }, this);
    };
    DialogSource.prototype.disableOtherItem = function () {
        var itemNormal = GM_1.default.resManager.texture['pray-b-nor'];
        this.item0.getComponent(cc.Sprite).spriteFrame = itemNormal;
        this.item1.getComponent(cc.Sprite).spriteFrame = itemNormal;
        this.item2.getComponent(cc.Sprite).spriteFrame = itemNormal;
        this.item3.getComponent(cc.Sprite).spriteFrame = itemNormal;
    };
    /**
     * 参与祈祷
     */
    DialogSource.prototype.joinPray = function () {
        var _this = this;
        var params = {
            activityId: GM_1.default.joinPrayItem.activityId,
            accountId: GM_1.default.user.accountId,
            devotePower: this.devotePower
        };
        Index_1.prayPower(params).then(function (res) {
            var count = cc.find('progress-desc/count', GM_1.default.joinPrayItemNode);
            var bar = cc.find('progress/bar', GM_1.default.joinPrayItemNode);
            var power = GM_1.default.user[Const_1.powerTypeEx(GM_1.default.joinPrayItem.powerType)];
            power -= _this.devotePower;
            // 当前神力
            count.getComponent(cc.Label).string = GM_1.default.joinPrayItem.currentPower + _this.devotePower;
            // 设置进度条进度
            bar.width = Math.round(((GM_1.default.joinPrayItem.currentPower + _this.devotePower) * 500 / GM_1.default.joinPrayItem.totalPower));
            GM_1.default.user[Const_1.powerTypeEx(GM_1.default.joinPrayItem.powerType)] = power;
            GM_1.default.toast("\u7948\u7977\u6210\u529F\uFF01" + Const_1.powerCn(GM_1.default.joinPrayItem.powerType) + " -" + _this.devotePower);
            GM_1.default.updateUserPower();
            GM_1.default.dialog.hideJoinPray();
        });
    };
    __decorate([
        property(cc.Node)
    ], DialogSource.prototype, "item0", void 0);
    __decorate([
        property(cc.Node)
    ], DialogSource.prototype, "item1", void 0);
    __decorate([
        property(cc.Node)
    ], DialogSource.prototype, "item2", void 0);
    __decorate([
        property(cc.Node)
    ], DialogSource.prototype, "item3", void 0);
    __decorate([
        property(cc.Node)
    ], DialogSource.prototype, "btn", void 0);
    __decorate([
        property(cc.Node)
    ], DialogSource.prototype, "btnClose", void 0);
    DialogSource = __decorate([
        ccclass
    ], DialogSource);
    return DialogSource;
}(cc.Component));
exports.default = DialogSource;

cc._RF.pop();