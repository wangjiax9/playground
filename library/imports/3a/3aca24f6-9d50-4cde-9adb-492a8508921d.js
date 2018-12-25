"use strict";
cc._RF.push(module, '3aca2T2nVBM3prbSSqFCJId', 'DialogRecycle');
// script/cc/DialogRecycle.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GM_1 = require("../global/GM");
var Index_1 = require("../api/Index");
var Const_1 = require("../utils/Const");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DialogSource = /** @class */ (function (_super) {
    __extends(DialogSource, _super);
    function DialogSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogSource.prototype.onLoad = function () {
        var _this = this;
        Index_1.fetchPrayList().then(function (res) {
            _this.buildPrayList(res);
        }).catch(function (err) {
            cc.log(err);
        });
    };
    /**
     * 构建祈祷列表
     * @param res
     */
    DialogSource.prototype.buildPrayList = function (res) {
        var _this = this;
        res.data.forEach(function (item) {
            var itemNode = cc.instantiate(GM_1.default.resManager.prefab['recycle-item']);
            var contentNode = cc.find('view/content', GM_1.default.dialog.dialogRecycle);
            contentNode.addChild(itemNode);
            itemNode.setPosition(74, -100);
            var gameName = cc.find('game-name', itemNode);
            var content = cc.find('content', itemNode);
            var btn = cc.find('pray-btn', itemNode);
            var bar = cc.find('progress/bar', itemNode);
            var count = cc.find('progress-desc/count', itemNode);
            var total = cc.find('progress-desc/total', itemNode);
            var powerIco1 = cc.find('progress-desc/power1-ico', itemNode);
            var powerIco2 = cc.find('progress-desc/power2-ico', itemNode);
            var powerIcoSf = null;
            if (item.powerType === 'strength') {
                powerIcoSf = GM_1.default.resManager.texture['power-st'];
            }
            else if (item.powerType === 'dexterity') {
                powerIcoSf = GM_1.default.resManager.texture['power-dx'];
            }
            else if (item.powerType === 'intelligence') {
                powerIcoSf = GM_1.default.resManager.texture['power-it'];
            }
            powerIco1.getComponent(cc.Sprite).spriteFrame = powerIcoSf;
            powerIco2.getComponent(cc.Sprite).spriteFrame = powerIcoSf;
            // 设置游戏名
            gameName.getComponent(cc.Label).string = Const_1.gameCn(item.gameId);
            // 祈祷内容
            content.getComponent(cc.Label).string = item.prayDesc;
            // 当前神力
            count.getComponent(cc.Label).string = item.currentPower;
            // 总共需要神力
            total.getComponent(cc.Label).string = item.totalPower;
            // 设置进度条进度
            bar.width = Math.round((item.currentPower * 500 / item.totalPower));
            if (item.state === 1) {
                btn.getComponent(cc.Sprite).spriteFrame = GM_1.default.resManager.texture['pray-btn-gone'];
            }
            else {
                item.isPray = false;
                // 获取按钮事件
                btn.on(cc.Node.EventType.TOUCH_START, function () {
                    if (item.isPray)
                        return;
                    btn.runAction(cc.scaleTo(0.2, 0.9, 0.9));
                }, _this);
                btn.on(cc.Node.EventType.TOUCH_END, function () {
                    if (item.isPray)
                        return;
                    item.isPray = true;
                    btn.runAction(cc.scaleTo(0.2, 1, 1));
                    btn.getComponent(cc.Sprite).spriteFrame = GM_1.default.resManager.texture['pray-btn-gone'];
                    btn.off(cc.Node.EventType.TOUCH_START, function () { }, _this);
                    btn.off(cc.Node.EventType.TOUCH_END, function () { }, _this);
                    GM_1.default.joinPrayItem = item;
                    GM_1.default.joinPrayItemNode = itemNode;
                    GM_1.default.dialog.showJoinPray();
                }, _this);
            }
        });
    };
    DialogSource = __decorate([
        ccclass
    ], DialogSource);
    return DialogSource;
}(cc.Component));
exports.default = DialogSource;

cc._RF.pop();