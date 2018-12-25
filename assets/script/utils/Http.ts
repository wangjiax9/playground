
// mock
const baseUrl = 'https://easy-mock.com/mock/5c191e7313c0eb6355d2efec'
// const baseUrl = ''
/**
 * HTTP请求
 * 导出一个单例
 * 封装了get和post方法
 */
class Http {
  private static instance: Http
  public static getInstance () {
    if (this.instance instanceof this === false) {
      this.instance = new this()
    }
    return this.instance
  }
  private constructor () {
  }
  /**
   * 发送请求
   * @param config 配置
   */
  public request(config: any) {
    return new Promise((resolve, reject) => {
      const xhr = cc.loader.getXMLHttpRequest()
      xhr.open(config.method, `${baseUrl}${config.url}`)
      xhr.timeout = 5000
      xhr.setRequestHeader('Content-type', 'application/json')
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const json: any = JSON.parse(xhr.responseText)
          resolve(json)
        } 
      }
      const data = config.data ? JSON.stringify(config.data) : ''
      xhr.send(data)
    })
  }
}

export default Http.getInstance()