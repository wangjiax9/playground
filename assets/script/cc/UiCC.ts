import GM from '../global/GM'
import { login } from '../api/Login'
import { godLv, godCn, roleTextureName } from '../utils/Const'
import { Sprite } from '../../../creator';

const { ccclass, property } = cc._decorator

@ccclass
export default class UiCC extends cc.Component {
  
  /**
   * 用户信息
   */
  @property(cc.Node)
  private user: cc.Node = null
   /**
   * 角色
   */
  @property(cc.Node)
  private role: cc.Node = null
  /**
   * 来源按钮
   */
  @property(cc.Node)
  private btnSource: cc.Node = null
  /**
   * 回收按钮
   */
  @property(cc.Node)
  private btnRecycle: cc.Node = null
  /**
   * 战斗按钮
   */
  @property(cc.Node)
  private btnBattle: cc.Node = null

  protected onLoad () {
    this.initUserInfo()
    this.eventHandle()
  }
  
  /**
   * 初始化用户信息
   */
  private initUserInfo() {
    const userNode = cc.instantiate(GM.resManager.prefab.user)
    this.node.addChild(userNode)
    userNode.setPosition(0, 200)
    GM.userNode = userNode

    this.roleAnim()
    const accountId = cc.find('user/name', this.node)
    const godCamp = cc.find('user/godCamp/godCampLabel', this.node)
    const lv = cc.find('user/lv/label', this.node)
    const stPower = cc.find('user/power/st-num', this.node)
    const dxPower = cc.find('user/power/dx-num', this.node)
    const itPower = cc.find('user/power/it-num', this.node)
    accountId.getComponent(cc.Label).string = GM.user.accountId
    godCamp.getComponent(cc.Label).string = godCn(GM.user.godCamp)
    lv.getComponent(cc.Label).string = 'LV: ' + godLv(GM.user.godLevel)
    stPower.getComponent(cc.Label).string = GM.user.powerStrength.toFixed(1)
    dxPower.getComponent(cc.Label).string = GM.user.powerDexterity.toFixed(1)
    itPower.getComponent(cc.Label).string = GM.user.powerIntelligence.toFixed(1)
  }
  private roleAnim() {
    this.role.getComponent(cc.Sprite).spriteFrame = GM.resManager.texture[roleTextureName(GM.user.godCamp)]
    const ac = cc.repeatForever(
      cc.sequence(
        cc.moveBy(1, cc.v2(0, 20)),
        cc.moveBy(1, cc.v2(0, -20)),
      )
    )
    ac.easing(cc.easeInOut(2))
    this.role.runAction(ac)
  }
  /**
   * 事件处理
   */
  private eventHandle() {
    this.btnSource.on(cc.Node.EventType.TOUCH_END, () => {
      GM.dialog.showSource()
    }, this)
    this.btnRecycle.on(cc.Node.EventType.TOUCH_END, () => {
      GM.dialog.showRecycle()
    }, this)
    this.btnBattle.on(cc.Node.EventType.TOUCH_END, () => {
      GM.dialog.showBattle()
    }, this)
    // 来源关闭按钮
    const closeNodeSource = cc.find('close', GM.dialog.dialogSource)
    // 回收关闭按钮
    const closeNodeRecycle = cc.find('close', GM.dialog.dialogRecycle)
    closeNodeSource.on(cc.Node.EventType.TOUCH_END, () => {
      GM.dialog.hideSource()
    }, this)
    closeNodeRecycle.on(cc.Node.EventType.TOUCH_END, () => {
      GM.dialog.hideRecycle()
    }, this)
  }
}