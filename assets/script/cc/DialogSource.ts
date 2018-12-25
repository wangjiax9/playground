import GM from '../global/GM'
import { fetchGainList, gainPower } from '../api/Index'
import { powerTypeEx, powerCn } from '../utils/Const'
import { isValid } from '../../../creator';

const { ccclass, property } = cc._decorator

@ccclass
export default class DialogSource extends cc.Component {

  protected onLoad () {
    const params = {
      accountId: GM.user.accountId
    }
    fetchGainList(params).then(res => {
      this.loadPrefab(res)
    }).catch(err => {
      cc.log(err)
    })
  }

  private loadPrefab(res: any) {
    cc.loader.loadRes('prefab/source-item', cc.Prefab, (err, prefab) => {
      if (err) {
          cc.error(err.message || err);
          return;
      }
      if (prefab instanceof cc.Prefab) {
        this.buildResouce(res, prefab)
      }
    })
    
  }
  private buildResouce(res: any, prefab: cc.Prefab) {
    res.data.forEach(item => {
      const itemNode = cc.instantiate(prefab)
      const contentNode = cc.find('view/content', GM.dialog.dialogSource)
      contentNode.addChild(itemNode)
      itemNode.setPosition(74, -100)
      const gameBg = cc.find('game-bg', itemNode)
      const borderBg = cc.find('border-bg', itemNode)
      const content = cc.find('content', itemNode)
      const contentLabel = cc.find('content/label', itemNode)
      const btn = cc.find('btn', itemNode)
      const btnLabel = cc.find('btn/label', itemNode)

      let sf: cc.SpriteFrame = null
      if (item.gameId === 'h48') {
        sf = GM.resManager.texture['item-sdyxl-bg']
      } else if (item.gameId === 'g37') {
        sf = GM.resManager.texture['item-yys-bg']
      } else {
        sf = GM.resManager.texture['item-zszz-bg']
      }
      // 设置游戏背景
      gameBg.getComponent(cc.Sprite).spriteFrame = sf
      // 设置内容
      contentLabel.getComponent(cc.Label).string = item.content
      // 设置按钮值
      btnLabel.getComponent(cc.Label).string = item.powerGain
      if (item.status === 1) {
        btn.getComponent(cc.Sprite).spriteFrame = GM.resManager.texture['got-btn']
        btnLabel.getComponent(cc.Label).string = ''
      } else {
        item.isGain = false
        // 获取按钮事件
        btn.on(cc.Node.EventType.TOUCH_START, () => {
          if (item.isGain) return
          btn.runAction(cc.scaleTo(0.2, 0.9, 0.9))
        }, this)
        btn.on(cc.Node.EventType.TOUCH_END, () => {
          if (item.isGain) return
          item.isGain = true
          btn.runAction(cc.scaleTo(0.2, 1, 1))
          btn.getComponent(cc.Sprite).spriteFrame = GM.resManager.texture['got-btn']
          btnLabel.getComponent(cc.Label).string = ''
          btn.off(cc.Node.EventType.TOUCH_START, () => {}, this)
          btn.off(cc.Node.EventType.TOUCH_END, () => {}, this)
          borderBg.getComponent(cc.Sprite).spriteFrame = GM.resManager.texture['source-border-disabled']
  
          let power = GM.user[powerTypeEx(item.powerType)]
          power += item.powerGain
          GM.user[powerTypeEx(item.powerType)] = power
          GM.toast(`${powerCn(item.powerType)} +${item.powerGain}`)
          GM.updateUserPower()
          this.getPower(item)
        }, this)
      }
    })
  }
  /**
   * 获取神力
   */
  private getPower(item: any) {
    const params = {
      accountId: GM.user.accountId,
      gainId: item.gainId,
      gameId: item.gameId,
      powerGain: item.powerGain,
      powerType: item.powerType
    }
    gainPower(params).then(res => {
      cc.log(`获取神力成功！`)
    })
  }
}