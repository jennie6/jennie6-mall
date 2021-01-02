
import axios from '@/network'

import Qs from 'qs'

// 获取用户列表接口
export const userlist = () => {
  return axios.request({
    url: '/api/user/list',
    method: 'GET'
  })
}
// 登录接口
export const login = (obj) => {
  return axios.request({
    url: '/api/user/login',
    data: Qs.stringify(obj),
    method: 'POST'
  })
}
export const regist = (obj) => {
  return axios.request({
    url: '/api/user/regist',
    data: Qs.stringify(obj),
    method: 'POST'
  })
}