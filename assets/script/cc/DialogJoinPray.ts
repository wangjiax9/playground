import GM from '../global/GM'
import { prayPower } from '../api/Index';
import { powerTypeEx, powerCn } from '../utils/Const'

const { ccclass, property } = cc._decorator

@ccclass
export default class DialogSource extends cc.Component {

  @property(cc.Node)
  private item0: cc.Node = null
  @property(cc.Node)
  private item1: cc.Node = null
  @property(cc.Node)
  private item2: cc.Node = null
  @property(cc.Node)
  private item3: cc.Node = null
  @property(cc.Node)
  private btn: cc.Node = null
  @property(cc.Node)
  private btnClose: cc.Node = null

  // 贡献的神力
  private devotePower: number = 0
  protected onLoad () {
    this.eventHandle()
    
  }

  private eventHandle () {
    const itemActive: cc.SpriteFrame = GM.resManager.texture['pray-b-active']
    this.item0.on(cc.Node.EventType.TOUCH_END, () => {
      this.disableOtherItem()
      this.devotePower = 10
      this.item0.getComponent(cc.Sprite).spriteFrame = itemActive
    }, this)
    this.item1.on(cc.Node.EventType.TOUCH_END, () => {
      this.disableOtherItem()
      this.devotePower = 20
      this.item1.getComponent(cc.Sprite).spriteFrame = itemActive
    }, this)
    this.item2.on(cc.Node.EventType.TOUCH_END, () => {
      this.disableOtherItem()
      this.devotePower = 50
      this.item2.getComponent(cc.Sprite).spriteFrame = itemActive
    }, this)
    this.item3.on(cc.Node.EventType.TOUCH_END, () => {
      this.disableOtherItem()
      this.devotePower = 100
      this.item3.getComponent(cc.Sprite).spriteFrame = itemActive
    }, this)
    this.btn.on(cc.Node.EventType.TOUCH_END, () => {
      const curPower = GM.user[powerTypeEx(GM.joinPrayItem.powerType)]
      if (this.devotePower > curPower) {
        GM.toast('该类型神力不足')
      } else {
        this.joinPray()
        this.btn.off(cc.Node.EventType.TOUCH_START, () => {}, this)
        this.btn.off(cc.Node.EventType.TOUCH_END, () => {}, this)
      }
    }, this)
    this.btnClose.on(cc.Node.EventType.TOUCH_END, () => {
      GM.dialog.hideJoinPray()
    }, this)
  }
  private disableOtherItem () {
    const itemNormal: cc.SpriteFrame = GM.resManager.texture['pray-b-nor']
    this.item0.getComponent(cc.Sprite).spriteFrame = itemNormal
    this.item1.getComponent(cc.Sprite).spriteFrame = itemNormal
    this.item2.getComponent(cc.Sprite).spriteFrame = itemNormal
    this.item3.getComponent(cc.Sprite).spriteFrame = itemNormal
  }

  /**
   * 参与祈祷
   */
  private joinPray () {
    const params = {
      activityId: GM.joinPrayItem.activityId,
      accountId: GM.user.accountId,
      devotePower: this.devotePower
    }
    prayPower(params).then(res => {
      const count = cc.find('progress-desc/count', GM.joinPrayItemNode)
      const bar = cc.find('progress/bar', GM.joinPrayItemNode)
      
      let power = GM.user[powerTypeEx(GM.joinPrayItem.powerType)]
      power -= this.devotePower
      // 当前神力
      count.getComponent(cc.Label).string = GM.joinPrayItem.currentPower + this.devotePower
      // 设置进度条进度
      bar.width = Math.round(((GM.joinPrayItem.currentPower + this.devotePower) * 500 / GM.joinPrayItem.totalPower))
      
      GM.user[powerTypeEx(GM.joinPrayItem.powerType)] = power
      GM.toast(`祈祷成功！${powerCn(GM.joinPrayItem.powerType)} -${this.devotePower}`)
      GM.updateUserPower()
      GM.dialog.hideJoinPray()
    })
  }
}