/**
 * 常量配置
 */
/**
 * 神等级
 * @param lv 等级
 */
export function godLv (lv: number) {
  switch (lv) {
    case 0: return '普通信徒'
    case 1: return '普通神职人员'
    case 2: return '区级主教'
    case 3: return '市级主教'
    case 4: return '省级主教'
    case 5: return '战区级主教'
    case 6: return '国家级主教'
    case 7: return '世界级教皇'
  } 
}

export function godCn (camp: string) {
  switch (camp) {
    case 'nature': return '自然神'
    case 'chinese': return '儒释道'
    case 'hebrew': return '希伯来神'
    case 'shinto': return '神道教'
  } 
}
export function roleTextureName (camp: string) {
  switch (camp) {
    case 'nature': return 'role01'
    case 'chinese': return 'role02'
    case 'hebrew': return 'role03'
    case 'shinto': return 'role04'
  } 
}
export function godCamp (camp: string) {
  switch (camp) {
    case 'god01': return 'nature'
    case 'god02': return 'chinese'
    case 'god03': return 'hebrew'
    case 'god04': return 'shinto'
  } 
}

export function gameCn (gameId: string) {
  switch (gameId) {
    case 'h48': return '神都夜行录'
    case 'g37': return '阴阳师'
    default: return gameId
  } 
}
/**
 * 神力类型对应用户神力属性
 * @param powerType 神力类型
 */
export function powerTypeEx (powerType) {
  switch (powerType) {
    case 'strength': return 'powerStrength'
    case 'dexterity': return 'powerDexterity'
    case 'intelligence': return 'powerIntelligence'
  } 
}
/**
 * 神力中文名
 * @param powerType 神力类型
 */
export function powerCn (powerType) {
  switch (powerType) {
    case 'strength': return '力量神力'
    case 'dexterity': return '敏捷神力'
    case 'intelligence': return '智力神力'
  } 
}

