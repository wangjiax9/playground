(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/cc/LoginDialog.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'af4c4kAfjdEuLAVYTBpx1t8', 'LoginDialog', __filename);
// script/cc/LoginDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GM_1 = require("../global/GM");
var Login_1 = require("../api/Login");
var Const_1 = require("../utils/Const");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoginDialog = /** @class */ (function (_super) {
    __extends(LoginDialog, _super);
    function LoginDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 标题框
         */
        _this.title = null;
        /**
         * 登录框
         */
        _this.dialogLogin = null;
        /**
         * 角色选择框
         */
        _this.dialogRoleSelect = null;
        /**
         * 用户输入框
         */
        _this.usernameEdit = null;
        /**
         * 密码输入框
         */
        _this.passwordEdit = null;
        /**
         * 登录按钮
         */
        _this.loginBtn = null;
        _this.accountId = '';
        _this.pwd = '';
        _this.godCamp = '';
        return _this;
    }
    LoginDialog.prototype.onLoad = function () {
        var _this = this;
        // GM.toastNode = cc.instantiate(GM.resManager.prefab['toast'])
        // this.node.addChild(GM.toastNode)
        // GM.toastNode.setPosition(2000, 0)
        GM_1.default.dialog.dialogLogin = this.dialogLogin;
        GM_1.default.dialog.dialogRoleSelect = this.dialogRoleSelect;
        this.roleSelectHandle();
        var btnComponent = this.loginBtn.getComponent(cc.Button);
        btnComponent.node.on('click', function () {
            _this.accountId = _this.usernameEdit.getComponent(cc.EditBox).string;
            _this.pwd = _this.passwordEdit.getComponent(cc.EditBox).string;
            var params = {
                accountId: _this.accountId,
                pwd: _this.pwd
            };
            // 登录
            Login_1.login(params).then(function (res) {
                cc.log(res.data.godCamp);
                if (!res.data.godCamp) {
                    cc.log('need register');
                    GM_1.default.dialog.hideLogin();
                    _this.schedule(function () {
                        _this.title.active = false;
                        GM_1.default.dialog.showRoleSelect();
                    }, 0, 0, 1);
                }
                else {
                    GM_1.default.setUser(res);
                    _this.schedule(function () {
                        GM_1.default.switchScene('main');
                    }, 0, 0, 1);
                }
            });
            // if (username !== '' && password !== '') {
            //   GM.dialog.hideLogin()
            //   this.schedule(() => {
            // this.title.active = false
            //     GM.dialog.showRoleSelect()
            //   }, 0, 0, 1)
            // }
        }, this);
    };
    LoginDialog.prototype.onDisable = function () {
        var ac = cc.fadeOut(1.0);
        this.node.runAction(ac);
    };
    /**
     * 角色选择处理
     */
    LoginDialog.prototype.roleSelectHandle = function () {
        var _this = this;
        // 滑动时恢复每个滑块的缩放
        this.dialogRoleSelect.on(cc.Node.EventType.TOUCH_MOVE, function () {
            var god1Border = cc.find('view/content/god01/border', _this.dialogRoleSelect);
            var god2Border = cc.find('view/content/god02/border', _this.dialogRoleSelect);
            var god3Border = cc.find('view/content/god03/border', _this.dialogRoleSelect);
            var god4Border = cc.find('view/content/god04/border', _this.dialogRoleSelect);
            god1Border.runAction(cc.fadeOut(0.2));
            god2Border.runAction(cc.fadeOut(0.2));
            god3Border.runAction(cc.fadeOut(0.2));
            god4Border.runAction(cc.fadeOut(0.2));
        }, this);
        var roleBtn = cc.find('btn', this.dialogRoleSelect);
        // 选择角色
        roleBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.toRegister();
        }, this);
    };
    LoginDialog.prototype.toRegister = function () {
        var _this = this;
        var params = {
            accountId: this.accountId,
            pwd: this.pwd,
            godCamp: Const_1.godCamp(GM_1.default.user.role)
        };
        Login_1.register(params).then(function (res) {
            cc.log("\u9009\u62E9\u89D2\u8272" + GM_1.default.user.role);
            GM_1.default.setUser(res);
            _this.schedule(function () {
                GM_1.default.switchScene('main');
            }, 0, 0, 1);
        });
    };
    __decorate([
        property(cc.Node)
    ], LoginDialog.prototype, "title", void 0);
    __decorate([
        property(cc.Node)
    ], LoginDialog.prototype, "dialogLogin", void 0);
    __decorate([
        property(cc.Node)
    ], LoginDialog.prototype, "dialogRoleSelect", void 0);
    __decorate([
        property(cc.Node)
    ], LoginDialog.prototype, "usernameEdit", void 0);
    __decorate([
        property(cc.Node)
    ], LoginDialog.prototype, "passwordEdit", void 0);
    __decorate([
        property(cc.Node)
    ], LoginDialog.prototype, "loginBtn", void 0);
    LoginDialog = __decorate([
        ccclass
    ], LoginDialog);
    return LoginDialog;
}(cc.Component));
exports.default = LoginDialog;

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
        //# sourceMappingURL=LoginDialog.js.map
        