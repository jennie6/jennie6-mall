import Axios from 'axios'

import { Message } from 'view-design'

const baseURL = 'http://127.0.0.1:7002'

class HttpRequest {
  constructor() {
    this.options = { method: '', url: '' }
    // 存储请求队列
    this.queue = {}
  }
  // 销毁请求实例
  destroy(url) {
    delete this.queue[url]
    const queue = Object.keys(this.queue)
    return queue.length
  }
  // 请求拦截
  interceptors(instance, url) {
    // 添加请求拦截器
    instance.interceptors.request.use(config => {
      return config
    }, error => {
      // 对请求错误做些什么
      return Promise.reject(error)
    })

    // 添加响应拦截器
    instance.interceptors.response.use((res) => {
      if (res.status != 200) {
        return false
      }
      return res.data
    }, (error) => {
      Message.error('网络错误')
      return Promise.reject(error)
    })
  }
  // 创建实例
  create() {
    let conf = {
      baseURL,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        'X-URL-PATH': location.pathname
      }
    }
    return Axios.create(conf)
  }
  // 请求实例
  request(options) {
    var instance = this.create()
    this.interceptors(instance, options.url)
    options = Object.assign({}, options)
    this.queue[options.url] = instance
    return instance(options)
  }
}
const axios = new HttpRequest()

export default axios
