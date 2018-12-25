"use strict";
cc._RF.push(module, 'f03cf7cZI9NfLNdOWyaL+96', 'Const');
// script/utils/Const.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 常量配置
 */
/**
 * 神等级
 * @param lv 等级
 */
function godLv(lv) {
    switch (lv) {
        case 0: return '普通信徒';
        case 1: return '普通神职人员';
        case 2: return '区级主教';
        case 3: return '市级主教';
        case 4: return '省级主教';
        case 5: return '战区级主教';
        case 6: return '国家级主教';
        case 7: return '世界级教皇';
    }
}
exports.godLv = godLv;
function godCn(camp) {
    switch (camp) {
        case 'nature': return '自然神';
        case 'chinese': return '儒释道';
        case 'hebrew': return '希伯来神';
        case 'shinto': return '神道教';
    }
}
exports.godCn = godCn;
function roleTextureName(camp) {
    switch (camp) {
        case 'nature': return 'role01';
        case 'chinese': return 'role02';
        case 'hebrew': return 'role03';
        case 'shinto': return 'role04';
    }
}
exports.roleTextureName = roleTextureName;
function godCamp(camp) {
    switch (camp) {
        case 'god01': return 'nature';
        case 'god02': return 'chinese';
        case 'god03': return 'hebrew';
        case 'god04': return 'shinto';
    }
}
exports.godCamp = godCamp;
function gameCn(gameId) {
    switch (gameId) {
        case 'h48': return '神都夜行录';
        case 'g37': return '阴阳师';
        default: return gameId;
    }
}
exports.gameCn = gameCn;
/**
 * 神力类型对应用户神力属性
 * @param powerType 神力类型
 */
function powerTypeEx(powerType) {
    switch (powerType) {
        case 'strength': return 'powerStrength';
        case 'dexterity': return 'powerDexterity';
        case 'intelligence': return 'powerIntelligence';
    }
}
exports.powerTypeEx = powerTypeEx;
/**
 * 神力中文名
 * @param powerType 神力类型
 */
function powerCn(powerType) {
    switch (powerType) {
        case 'strength': return '力量神力';
        case 'dexterity': return '敏捷神力';
        case 'intelligence': return '智力神力';
    }
}
exports.powerCn = powerCn;

cc._RF.pop();