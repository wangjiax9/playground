import GM from '../global/GM'

const { ccclass, property } = cc._decorator

@ccclass
export default class Loading extends cc.Component {

  @property(cc.Node)
  private progress: cc.Node = null

  private isSwitching: boolean = false

  protected onLoad () {
    GM.resManager.load()
    // GM.switchScene('login')
  }
  
  protected update () {
    if (GM.resManager.getCurPer() < 100) {
      // 加载进度
      this.progress.getComponent(cc.Label).string = GM.resManager.getCurPer() + '%'
    }
    if (GM.resManager.getCurPer() >= 100  && !this.isSwitching) {
      this.isSwitching = true
      GM.switchScene('login')
    }
  }
}