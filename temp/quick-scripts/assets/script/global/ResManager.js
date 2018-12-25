(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/global/ResManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f77acl4bCZI6IsobV1Fm008', 'ResManager', __filename);
// script/global/ResManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResManager = /** @class */ (function () {
    function ResManager() {
        // 龙骨资源根目录
        this.dragonRoot = 'dragon-bones';
        /**
         * 预制资源
         */
        this.prefab = {};
        /**
         * 贴图资源
         */
        this.texture = {};
        /**
         * 加载进度组
         * 相加为总进度
         * [0]: 预制资源加载进度
         * [1]: 龙骨资源加载进度
         */
        this.perArr = [];
        /**
         * 预制资源加载权重
         */
        this.weightPrefab = 0.5;
        /**
         * 贴图资源加载权重
         */
        this.weightTexture = 0.5;
        /**
         * 龙骨资源加载权重
         */
        this.weightDragon = 0.5;
    }
    /**
     * 加载预制资源
     */
    ResManager.prototype.loadPrefab = function () {
        var _this = this;
        var self = this;
        cc.loader.loadResDir('prefab', progressCbPrefab, function (err, assets) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            assets.forEach(function (asset) {
                if (asset instanceof cc.Prefab) {
                    _this.prefab[asset.name] = asset;
                }
            });
        });
        function progressCbPrefab(count, total) {
            var per = Math.round((count / total) * 100);
            self.perArr[0] = per * self.weightPrefab;
            // cc.log(per)
        }
    };
    /**
     * 加载贴图资源
     */
    ResManager.prototype.loadTexture = function () {
        var _this = this;
        var self = this;
        cc.loader.loadResDir('texture', progressCbPrefab, function (err, assets) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            assets.forEach(function (asset) {
                if (asset instanceof cc.SpriteFrame) {
                    _this.texture[asset.name] = asset;
                }
            });
        });
        function progressCbPrefab(count, total) {
            var per = Math.round((count / total) * 100);
            self.perArr[1] = per * self.weightTexture;
            // cc.log(per)
        }
    };
    /**
     * 加载龙骨资源
     */
    ResManager.prototype.loadDragonBones = function () {
        var self = this;
        cc.loader.loadResDir('dragon-bones/dragon', progressCbDragon, function (err, assets) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            cc.log(assets);
        });
        function progressCbDragon(count, total) {
            var per = Math.round((count / total) * 100);
            self.perArr[2] = per * self.weightDragon;
            // cc.log(per)
        }
    };
    /**
     * 加载资源
     */
    ResManager.prototype.load = function () {
        this.loadPrefab();
        this.loadTexture();
    };
    /**
     * 获得当前加载进度
     */
    ResManager.prototype.getCurPer = function () {
        if (this.perArr.length < 1)
            return;
        return this.perArr.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        });
    };
    return ResManager;
}());
exports.default = ResManager;

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
        //# sourceMappingURL=ResManager.js.map
        