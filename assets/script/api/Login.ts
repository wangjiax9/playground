import Http from '../utils/Http'

export function login (params?: any) {
  return Http.request({
    url: '/login',
    method: 'post',
    data: params
  })
}
export function register (params?: any) {
  return Http.request({
    url: '/register',
    method: 'post',
    data: params
  })
}