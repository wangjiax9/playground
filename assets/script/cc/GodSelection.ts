import GM from '../global/GM'

const { ccclass, property } = cc._decorator

@ccclass
export default class GodSelection extends cc.Component {

  private border: cc.Node = null
  protected onLoad () {
    this.border = cc.find('border', this.node)
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
  }
  /**
   * 触屏开始
   */
  private onTouchStart(e: cc.Event.EventTouch) {
    this.border.runAction(cc.fadeIn(0.2))
    const ac = cc.repeatForever(
      cc.sequence(
        cc.scaleTo(1, 1.02, 1.02),
        cc.scaleTo(1, 0.99, 0.99)
      )
    )
    ac.easing(cc.easeInOut(2))
    this.border.runAction(ac)
  }
  /**
   * 触屏移动
   */
  private onTouchMove(e: cc.Event.EventTouch) {
    // this.node.runAction(cc.scaleTo(0.2, 1, 1))
  }
  /**
   * 触屏结束
   */
  private onTouchEnd(e: cc.Event.EventTouch) {
    const target = e.target
    GM.user.role = target.name
    // this.node.runAction(cc.scaleTo(0.2, 1.1, 1.1))
  }

}