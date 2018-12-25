import GM from '../global/GM'

const { ccclass, property } = cc._decorator

@ccclass
export default class GameWorld extends cc.Component {

  /**
   * 来源框
   */
  @property(cc.Node)
  private dialogSource: cc.Node = null
  /**
   * 回收框
   */
  @property(cc.Node)
  private dialogRecycle: cc.Node = null
  /**
   * 祈祷神力选择框
   */
  @property(cc.Node)
  private dialogJoinPray: cc.Node = null
  /**
   * 战斗框
   */
  @property(cc.Node)
  private dialogBattle: cc.Node = null
  /**
   * 战斗结果框
   */
  @property(cc.Node)
  private dialogBattleResult: cc.Node = null
 

  protected onLoad () {
    GM.dialog.dialogSource = this.dialogSource
    GM.dialog.dialogRecycle = this.dialogRecycle
    GM.dialog.dialogJoinPray = this.dialogJoinPray
    GM.dialog.dialogBattle = this.dialogBattle
    GM.dialog.dialogBattleResult = this.dialogBattleResult

    GM.toastNode = cc.instantiate(GM.resManager.prefab['toast'])
    this.node.addChild(GM.toastNode)
    GM.toastNode.setPosition(2000, 0)
    
  }

}