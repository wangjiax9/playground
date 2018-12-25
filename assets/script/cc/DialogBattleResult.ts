import GM from '../global/GM'
import { fetchPrayList, prayPower } from '../api/Index';
import { gameCn } from '../utils/Const'

const { ccclass, property } = cc._decorator

@ccclass
export default class DialogSource extends cc.Component {

  @property(cc.Node)
  private toBack: cc.Node = null
  protected onLoad () {
    this.toBack.on(cc.Node.EventType.TOUCH_END, () => {
      GM.dialog.hideBattleResult()
    }, this)
  }
  
}