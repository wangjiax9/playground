(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/cc/DialogSource.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '49a29jOvQJJgLEKQwYoPmsu', 'DialogSource', __filename);
// script/cc/DialogSource.ts

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
        var params = {
            accountId: GM_1.default.user.accountId
        };
        Index_1.fetchGainList(params).then(function (res) {
            _this.loadPrefab(res);
        }).catch(function (err) {
            cc.log(err);
        });
    };
    DialogSource.prototype.loadPrefab = function (res) {
        var _this = this;
        cc.loader.loadRes('prefab/source-item', cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            if (prefab instanceof cc.Prefab) {
                _this.buildResouce(res, prefab);
            }
        });
    };
    DialogSource.prototype.buildResouce = function (res, prefab) {
        var _this = this;
        res.data.forEach(function (item) {
            var itemNode = cc.instantiate(prefab);
            var contentNode = cc.find('view/content', GM_1.default.dialog.dialogSource);
            contentNode.addChild(itemNode);
            itemNode.setPosition(74, -100);
            var gameBg = cc.find('game-bg', itemNode);
            var borderBg = cc.find('border-bg', itemNode);
            var content = cc.find('content', itemNode);
            var contentLabel = cc.find('content/label', itemNode);
            var btn = cc.find('btn', itemNode);
            var btnLabel = cc.find('btn/label', itemNode);
            var sf = null;
            if (item.gameId === 'h48') {
                sf = GM_1.default.resManager.texture['item-sdyxl-bg'];
            }
            else if (item.gameId === 'g37') {
                sf = GM_1.default.resManager.texture['item-yys-bg'];
            }
            else {
                sf = GM_1.default.resManager.texture['item-zszz-bg'];
            }
            // 设置游戏背景
            gameBg.getComponent(cc.Sprite).spriteFrame = sf;
            // 设置内容
            contentLabel.getComponent(cc.Label).string = item.content;
            // 设置按钮值
            btnLabel.getComponent(cc.Label).string = item.powerGain;
            if (item.status === 1) {
                btn.getComponent(cc.Sprite).spriteFrame = GM_1.default.resManager.texture['got-btn'];
                btnLabel.getComponent(cc.Label).string = '';
            }
            else {
                item.isGain = false;
                // 获取按钮事件
                btn.on(cc.Node.EventType.TOUCH_START, function () {
                    if (item.isGain)
                        return;
                    btn.runAction(cc.scaleTo(0.2, 0.9, 0.9));
                }, _this);
                btn.on(cc.Node.EventType.TOUCH_END, function () {
                    if (item.isGain)
                        return;
                    item.isGain = true;
                    btn.runAction(cc.scaleTo(0.2, 1, 1));
                    btn.getComponent(cc.Sprite).spriteFrame = GM_1.default.resManager.texture['got-btn'];
                    btnLabel.getComponent(cc.Label).string = '';
                    btn.off(cc.Node.EventType.TOUCH_START, function () { }, _this);
                    btn.off(cc.Node.EventType.TOUCH_END, function () { }, _this);
                    borderBg.getComponent(cc.Sprite).spriteFrame = GM_1.default.resManager.texture['source-border-disabled'];
                    var power = GM_1.default.user[Const_1.powerTypeEx(item.powerType)];
                    power += item.powerGain;
                    GM_1.default.user[Const_1.powerTypeEx(item.powerType)] = power;
                    GM_1.default.toast(Const_1.powerCn(item.powerType) + " +" + item.powerGain);
                    GM_1.default.updateUserPower();
                    _this.getPower(item);
                }, _this);
            }
        });
    };
    /**
     * 获取神力
     */
    DialogSource.prototype.getPower = function (item) {
        var params = {
            accountId: GM_1.default.user.accountId,
            gainId: item.gainId,
            gameId: item.gameId,
            powerGain: item.powerGain,
            powerType: item.powerType
        };
        Index_1.gainPower(params).then(function (res) {
            cc.log("\u83B7\u53D6\u795E\u529B\u6210\u529F\uFF01");
        });
    };
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
        //# sourceMappingURL=DialogSource.js.map
        