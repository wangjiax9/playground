import GM from '../global/GM'
import { login, register } from '../api/Login'
import { godCamp } from '../utils/Const'

const { ccclass, property } = cc._decorator

@ccclass
export default class LoginDialog extends cc.Component {

  /**
   * 标题框
   */
  @property(cc.Node)
  private title: cc.Node = null
  /**
   * 登录框
   */
  @property(cc.Node)
  private dialogLogin: cc.Node = null
  /**
   * 角色选择框
   */
  @property(cc.Node)
  private dialogRoleSelect: cc.Node = null
  /**
   * 用户输入框
   */
  @property(cc.Node)
  private usernameEdit: cc.Node = null
  /**
   * 密码输入框
   */
  @property(cc.Node)
  private passwordEdit: cc.Node = null
  /**
   * 登录按钮
   */
  @property(cc.Node)
  private loginBtn: cc.Node = null

  private accountId: string =''
  private pwd: string = ''
  private godCamp: string = ''
  protected onLoad () {
    // GM.toastNode = cc.instantiate(GM.resManager.prefab['toast'])
    // this.node.addChild(GM.toastNode)
    // GM.toastNode.setPosition(2000, 0)
    GM.dialog.dialogLogin = this.dialogLogin
    GM.dialog.dialogRoleSelect = this.dialogRoleSelect
    this.roleSelectHandle()

    const btnComponent = this.loginBtn.getComponent(cc.Button)
    btnComponent.node.on('click', () => {
      this.accountId = this.usernameEdit.getComponent(cc.EditBox).string
      this.pwd = this.passwordEdit.getComponent(cc.EditBox).string
      const params = {
        accountId: this.accountId,
        pwd: this.pwd
      }
      // 登录
      login(params).then(res => {
        cc.log(res.data.godCamp)
        if (!res.data.godCamp) {
          cc.log('need register')
          GM.dialog.hideLogin()
          this.schedule(() => {
            this.title.active = false
            GM.dialog.showRoleSelect()
          }, 0, 0, 1)
        } else {
          GM.setUser(res)
          this.schedule(() => {
            GM.switchScene('main')
          }, 0, 0, 1)
        }
      })
      // if (username !== '' && password !== '') {
      //   GM.dialog.hideLogin()
      //   this.schedule(() => {
          // this.title.active = false
      //     GM.dialog.showRoleSelect()
      //   }, 0, 0, 1)
      // }
    }, this)
  }
  protected onDisable () {
    const ac = cc.fadeOut(1.0)
    this.node.runAction(ac)
  }
  /**
   * 角色选择处理
   */
  private roleSelectHandle() {
    // 滑动时恢复每个滑块的缩放
    this.dialogRoleSelect.on(cc.Node.EventType.TOUCH_MOVE, () => {
      const god1Border = cc.find('view/content/god01/border', this.dialogRoleSelect)
      const god2Border = cc.find('view/content/god02/border', this.dialogRoleSelect)
      const god3Border = cc.find('view/content/god03/border', this.dialogRoleSelect)
      const god4Border = cc.find('view/content/god04/border', this.dialogRoleSelect)
      god1Border.runAction(cc.fadeOut(0.2))
      god2Border.runAction(cc.fadeOut(0.2))
      god3Border.runAction(cc.fadeOut(0.2))
      god4Border.runAction(cc.fadeOut(0.2))
    }, this)

    const roleBtn = cc.find('btn', this.dialogRoleSelect)
    // 选择角色
    roleBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.toRegister()
    }, this)
  }

  private toRegister() {
    const params = {
      accountId: this.accountId,
      pwd: this.pwd,
      godCamp: godCamp(GM.user.role)
    }
    register(params).then(res => {
      cc.log(`选择角色${GM.user.role}`)
      GM.setUser(res)
      this.schedule(() => {
        GM.switchScene('main')
      }, 0, 0, 1)
    })
  }

}