import GM from '../global/GM'
import { fetchPrayList, prayPower } from '../api/Index';
import { gameCn } from '../utils/Const'

const { ccclass, property } = cc._decorator

@ccclass
export default class DialogSource extends cc.Component {

  @property(cc.Node)
  private toBattle: cc.Node = null
  @property(cc.Node)
  private BattleClose: cc.Node = null
  private isBattle = false
  protected onLoad () {
    this.toBattle.on(cc.Node.EventType.TOUCH_END, () => {
      if (this.isBattle) return
      this.isBattle = true
      GM.toast('战斗中……')
      this.schedule(() => {
        GM.dialog.showBattleResult()
      }, 0, 0, 2)
    }, this)
    this.BattleClose.on(cc.Node.EventType.TOUCH_END, () => {
      GM.dialog.hideBattle()
    }, this)
  }
  
}