import GM from '../global/GM'
import { fetchPrayList } from '../api/Index'
import { gameCn } from '../utils/Const'

const { ccclass, property } = cc._decorator

@ccclass
export default class DialogSource extends cc.Component {

  protected onLoad () {
    fetchPrayList().then(res => {
      this.buildPrayList(res)
    }).catch(err => {
      cc.log(err)
    })
  }
  
  /**
   * 构建祈祷列表
   * @param res 
   */
  private buildPrayList(res: any) {
    res.data.forEach(item => {
      const itemNode = cc.instantiate(GM.resManager.prefab['recycle-item'])
      const contentNode = cc.find('view/content', GM.dialog.dialogRecycle)
      contentNode.addChild(itemNode)
      itemNode.setPosition(74, -100)

      const gameName = cc.find('game-name', itemNode)
      const content = cc.find('content', itemNode)
      const btn = cc.find('pray-btn', itemNode)
      const bar = cc.find('progress/bar', itemNode)
      const count = cc.find('progress-desc/count', itemNode)
      const total = cc.find('progress-desc/total', itemNode)
      const powerIco1 = cc.find('progress-desc/power1-ico', itemNode)
      const powerIco2 = cc.find('progress-desc/power2-ico', itemNode)
      let powerIcoSf: cc.SpriteFrame = null 
      if (item.powerType === 'strength') {
        powerIcoSf = GM.resManager.texture['power-st']
      } else if (item.powerType === 'dexterity') {
        powerIcoSf = GM.resManager.texture['power-dx']
      } else if (item.powerType === 'intelligence') {
        powerIcoSf = GM.resManager.texture['power-it']
      }
      powerIco1.getComponent(cc.Sprite).spriteFrame = powerIcoSf
      powerIco2.getComponent(cc.Sprite).spriteFrame = powerIcoSf
      // 设置游戏名
      gameName.getComponent(cc.Label).string = gameCn(item.gameId)
      // 祈祷内容
      content.getComponent(cc.Label).string = item.prayDesc
      // 当前神力
      count.getComponent(cc.Label).string = item.currentPower
      // 总共需要神力
      total.getComponent(cc.Label).string = item.totalPower
      // 设置进度条进度
      bar.width = Math.round((item.currentPower * 500 / item.totalPower))

      if (item.state === 1) {
        btn.getComponent(cc.Sprite).spriteFrame = GM.resManager.texture['pray-btn-gone']
      } else {
        item.isPray = false
        // 获取按钮事件
        btn.on(cc.Node.EventType.TOUCH_START, () => {
          if (item.isPray) return
          btn.runAction(cc.scaleTo(0.2, 0.9, 0.9))
        }, this)
        btn.on(cc.Node.EventType.TOUCH_END, () => {
          if (item.isPray) return
          item.isPray = true
          btn.runAction(cc.scaleTo(0.2, 1, 1))
          btn.getComponent(cc.Sprite).spriteFrame = GM.resManager.texture['pray-btn-gone']
          btn.off(cc.Node.EventType.TOUCH_START, () => {}, this)
          btn.off(cc.Node.EventType.TOUCH_END, () => {}, this)
          GM.joinPrayItem = item
          GM.joinPrayItemNode = itemNode
          GM.dialog.showJoinPray()
        }, this)
      }
    })
  }

  
}