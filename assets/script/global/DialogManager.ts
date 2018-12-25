/**
 * 弹框管理
 */
export default class DialogManager {
  /**
   * 登录框
   */
  public dialogLogin: cc.Node = null
  /**
   * 角色选择框
   */
  public dialogRoleSelect: cc.Node = null
  /**
   * 来源框
   */
  public dialogSource: cc.Node = null
  /**
   * 回收框
   */
  public dialogRecycle: cc.Node = null
  /**
   * 祈祷神力选择框
   */
  public dialogJoinPray: cc.Node = null
  /**
   * 战斗框
   */
  public dialogBattle: cc.Node = null
  /**
   * 战斗结果框
   */
  public dialogBattleResult: cc.Node = null

  /**
   * 显示登录弹框
   */
  public showLogin () {
    this.dialogLogin.runAction(cc.fadeIn(0.5))
  }
  /**
   * 隐藏登录弹框
   */
  public hideLogin () {
    const ac = cc.sequence(
      cc.delayTime(0.5),
      cc.fadeOut(0.5),
      cc.moveBy(0, cc.v2(1000, 0)) // 防止点击遮挡
    )
    this.dialogLogin.runAction(ac)
    
  }
  /**
   * 显示选择角色弹框
   */
  public showRoleSelect () {
    const ac = cc.sequence(
      cc.scaleTo(0, 0.1, 0.1),
      cc.moveTo(0, cc.v2(375, 600)),
      cc.scaleTo(0.5, 1, 1)
    )
    ac.easing(cc.easeOut(3.0))
    this.dialogRoleSelect.runAction(ac)
  }
  /**
   * 隐藏选择角色弹框
   */
  public hideRoleSelect () {
    this.dialogRoleSelect.runAction(cc.fadeOut(0.5))
  }
  /**
   * 显示资源弹框
   */
  public showSource () {
    const ac = cc.sequence(
      cc.moveTo(0, cc.v2(0, -800)),
      cc.moveBy(0.2, cc.v2(0, 800))
    )
    this.dialogSource.runAction(ac)
  }
  /**
   * 隐藏资源弹框
   */
  public hideSource () {
    this.dialogSource.runAction(cc.moveBy(0.2, cc.v2(0, -800)))
  }
  /**
   * 显示回收弹框
   */
  public showRecycle () {
    const ac = cc.sequence(
      cc.moveTo(0, cc.v2(0, -800)),
      cc.moveBy(0.2, cc.v2(0, 800))
    )
    this.dialogRecycle.runAction(ac)
  }
  /**
   * 隐藏回收弹框
   */
  public hideRecycle () {
    this.dialogRecycle.runAction(cc.moveBy(0.2, cc.v2(0, -800)))
  }
  /**
   * 显示祈祷神力选择框
   */
  public showJoinPray () {
    const ac = cc.sequence(
      cc.scaleTo(0, 0.1, 0.1),
      cc.moveTo(0, cc.v2(375, 667)),
      cc.scaleTo(0.5, 1, 1)
    )
    ac.easing(cc.easeOut(3.0))
    this.dialogJoinPray.runAction(ac)
  }
  /**
   * 隐藏祈祷神力选择框
   */
  public hideJoinPray () {
    const ac = cc.sequence(
      cc.scaleTo(0, 0.1, 0.1),
      cc.moveBy(0.2, cc.v2(0, 2000))
    )
    this.dialogJoinPray.runAction(ac)
  }
  /**
   * 显示战斗弹框
   */
  public showBattle () {
    const ac = cc.sequence(
      cc.moveTo(0, cc.v2(0, -800)),
      cc.moveBy(0.2, cc.v2(0, 800))
    )
    this.dialogBattle.runAction(ac)
  }
  /**
   * 隐藏战斗弹框
   */
  public hideBattle () {
    this.dialogBattle.runAction(cc.moveBy(0.2, cc.v2(0, -800)))
  }
    /**
   * 显示战斗结果弹框
   */
  public showBattleResult () {
    const ac = cc.sequence(
      cc.moveTo(0, cc.v2(-800, 667)),
      cc.moveTo(0.2, cc.v2(375, 667))
    )
    this.dialogBattleResult.runAction(ac)
  }
  /**
   * 隐藏战斗结果弹框
   */
  public hideBattleResult () {
    this.dialogBattleResult.runAction(cc.moveBy(0.2, cc.v2(1000, 667)))
  }
}