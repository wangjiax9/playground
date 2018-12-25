import ResManager from './ResManager';
import DialogManager from './DialogManager'
import { Prefab } from '../../../creator';
/**
 * 游戏管理
 */
class GM {
  private static instance: GM
  public static getInstance () {
    if (this.instance instanceof this === false) {
      this.instance = new this()
    }
    return this.instance
  }
  private constructor () {
    this.init()
  }

  /**
   * 资源管理
   */
  public resManager: ResManager = null

  /**
   * 弹框管理
   */
  public dialog: DialogManager = null
  /**
   * 消息框节点
   */
  public toastNode: cc.Node = null
  /**
   * 是否登录
   */
  public isLogin: boolean = false
  /**
   * 用户信息
   */
  public user: any = {}
  /**
   * 用户节点
   */
  public userNode: cc.Node = null

  /**
   * 参与祈祷的活动
   */
  public joinPrayItem: any = {}
  /**
   * 参与祈祷的活动节点
   */
  public joinPrayItemNode: cc.Node = null
  /**
   * 初始化
   */
  public init () {
    this.resManager = new ResManager()
    this.dialog = new DialogManager()
  }
  /**
   * 切换场景
   * @param scene 场景名
   */
  public switchScene (scene) {
    cc.director.loadScene(scene)
  }
  public setUser (res: any) {
    this.user = res.data
  }
  public updateUserPower () {
    const stPower = cc.find('power/st-num', this.userNode)
    const dxPower = cc.find('power/dx-num', this.userNode)
    const itPower = cc.find('power/it-num', this.userNode)
    stPower.getComponent(cc.Label).string = this.user.powerStrength.toFixed(1)
    dxPower.getComponent(cc.Label).string = this.user.powerDexterity.toFixed(1)
    itPower.getComponent(cc.Label).string = this.user.powerIntelligence.toFixed(1)
  }
  /**
   * toast消息框
   * @param msg 
   */
  public toast (msg: string) {
    const msgNode = cc.find('msg', this.toastNode)
    msgNode.getComponent(cc.Label).string = msg
    const ac = cc.sequence(
      cc.fadeIn(0),
      cc.scaleTo(0, 0.1, 0.1),
      cc.moveTo(0, cc.v2(0, 200)),
      cc.scaleTo(0.5, 1, 1),
      cc.delayTime(1.5),
      cc.fadeOut(0.5),
      cc.moveTo(0, cc.v2(800, 800))
    )
    ac.easing(cc.easeOut(3.0))
    this.toastNode.runAction(ac)
    cc.log(this.toastNode)
  }
}

export default GM.getInstance()