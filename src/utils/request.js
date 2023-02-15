import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'
import { error } from 'shelljs'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url

  timeout: 6000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

// request拦截器
service.interceptors.request.use(config => {
  // if (store.getters.token) {
  // config.data = qs.stringify(config.data) // 转为formdata数据格式
  config.headers['token'] = getToken() || '' // 让每个请求携带自定义token 请根据实际情况自行修改
  // }
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(response => {
  return response.data
},
  error => {
    const { status } = error.response
    const message = showStatus(status)
    if (status === '401') {
      MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('FedLogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      })
      this.$route.push('/login')
      return Promise.reject(error)
    }
    Message({
      message,
      type: 'error',
      duration: 3 * 1000,
    })
    return Promise.reject(response.data)
  }
)

const showStatus = (code) => {
  let message = ""
  switch (code) {
    case 400:
      message = '请求错误';
      break;
    case 401:
      message = '未授权，请重新登录';
      break;
    case 403:
      message = '请求出错';
      break;
    case 404:
      message = '网络请求不存在'
      break;
    case 408:
      message = '请求超时';
      break;
    case 500:
      message = '服务器错误'
      break;
    case 501:
      message = '服务未实现';
      break;
    case 502:
      message = '网络错误';
      break;
    case 503:
      message = '服务不可用';
      break;
    case 505:
      message = 'HTTP版本不受支持';
      break;
    default:
      message = `连接出错(${code})`
  }
  return message
}

export default service