
export default class ResManager {
  // 龙骨资源根目录
  private dragonRoot: string = 'dragon-bones'
  
  /**
   * 预制资源
   */
  public prefab: any = {}

  /**
   * 贴图资源
   */
  public texture: any = {}
  /**
   * 加载进度组
   * 相加为总进度
   * [0]: 预制资源加载进度
   * [1]: 龙骨资源加载进度
   */
  public perArr: Array<number> = []
  /**
   * 预制资源加载权重
   */
  public weightPrefab: number = 0.5
  /**
   * 贴图资源加载权重
   */
  public weightTexture: number = 0.5
  /**
   * 龙骨资源加载权重
   */
  public weightDragon: number = 0.5
  /**
   * 加载预制资源
   */
  public loadPrefab() {
    const self = this
    cc.loader.loadResDir('prefab', progressCbPrefab, (err, assets) => {
      if (err) {
        cc.error(err.message || err)
        return
      }
      assets.forEach(asset => {
        if (asset instanceof cc.Prefab) {
          this.prefab[asset.name] = asset
        }
      })
    })

    function progressCbPrefab(count, total) {
      let per = Math.round((count / total) * 100)
      self.perArr[0] = per * self.weightPrefab
      // cc.log(per)
    }
  }
  /**
   * 加载贴图资源
   */
  public loadTexture() {
    const self = this
    cc.loader.loadResDir('texture', progressCbPrefab, (err, assets) => {
      if (err) {
        cc.error(err.message || err)
        return
      }
      assets.forEach(asset => {
        if (asset instanceof cc.SpriteFrame) {
          this.texture[asset.name] = asset
        }
      })
    })

    function progressCbPrefab(count, total) {
      let per = Math.round((count / total) * 100)
      self.perArr[1] = per * self.weightTexture
      // cc.log(per)
    }
  }
  /**
   * 加载龙骨资源
   */
  public loadDragonBones() {
    const self = this
    cc.loader.loadResDir('dragon-bones/dragon', progressCbDragon, (err, assets) => {
      if (err) {
        cc.error(err.message || err)
        return
      }
      cc.log(assets)
    })
    function progressCbDragon(count, total) {
      let per = Math.round((count / total) * 100)
      self.perArr[2] = per * self.weightDragon
      // cc.log(per)
    }
  }
  /**
   * 加载资源
   */
  public load () {
    this.loadPrefab()
    this.loadTexture()
  }
  /**
   * 获得当前加载进度
   */
  public getCurPer () {
    if (this.perArr.length < 1) return
    return this.perArr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    })
  }
}