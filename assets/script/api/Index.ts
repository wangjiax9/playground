import Http from '../utils/Http'
/**
 * 获取来源列表
 */
export function fetchGainList (params?: any) {
  return Http.request({
    url: `/gain/list`,
    method: 'post',
    data: params
  })
}
/**
 * 获取神力
 * @param params 
 */
export function gainPower (params?: any) {
  return Http.request({
    url: '/gain/power',
    method: 'post',
    data: params
  })
}
/**
 * 获取所有祈祷
 */
export function fetchPrayList () {
  return Http.request({
    url: '/pray/list',
    method: 'get'
  })
}
/**
 * 参与祈祷
 * @param params 
 */
export function prayPower (params?: any) {
  return Http.request({
    url: '/pray/join',
    method: 'post',
    data: params
  })
}