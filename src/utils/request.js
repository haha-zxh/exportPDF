/*
 * @Description: 
 */
import axios from 'axios'
import { getToken, getAuthorization, setTenant, getTenant } from '@/utils/auth'
import { signatureGenerate } from '@/utils/signatureUtils'
import { ElMessage } from 'element-plus'

//  配置默认项
const service = axios.create({
  baseURL: '/apis',
  timeout: 15000,
  withCredentials: true
})

//  请求拦截
service.interceptors.request.use(
  config => {
    // 加上签名
    const {signature, timestamp} = signatureGenerate(config)
    if(signature) config.headers['signature'] = signature
    if(timestamp) config.headers['timestamp'] = timestamp

    // 租户信息携带
    if (getTenant()) {
      config.headers['tenant'] = getTenant()
    }
    
    // 根据租户类型，携带对应token
    if (getTenant() === 'cq' && getAuthorization()) {
      config.headers['Authorization'] = getAuthorization()
    }
    if (getTenant() === 'native' && getToken()) {
      config.headers['token'] = getToken()
    }
      

    return config
  }, 
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截
service.interceptors.response.use(
  response => {
    // 异地登录 || 登录超时
    if ([406, 40001].includes(response.data.code)) {
      const msgMap = {
        406: '该账号已在其他处登录，如非本人操作，请修改密码',
        40001: '登录超时'
      } 
      ElMessage({ message: msgMap[response.data.code], type: 'error', customClass: 'core-message', duration: 2000 })
      const cur = window.document.location.href // 获取当前地址栏的路径
      const localhostPath = cur.substring(0, cur.indexOf(window.document.location.pathname)) // 获取当前地址栏的host路径
      const timer = setTimeout(() => {
        window.location.replace(process.env.NODE_ENV === 'development' ? localhostPath + '/safetyLogin' : Config.projectPCUrl().value + '/safetyLogin') // 重定向路由地址
        clearTimeout(timer)
      }, 2000)
    }

    // // console.log('响应拦截', response);
    // // 签名
    // const signature = response.headers.signature
    // // 时间戳
    // const timestamp = response.headers.timestamp
    // // 响应体
    // const data = JSON.stringify(response.data)
    // // MD5加密
    // const sign = md5(data+timestamp+'ctjtservice').toUpperCase()
    // // 加密对比
    // if (sign === signature)
    //   return response.data
    // // 没有签名也放行
    // else if (timestamp === undefined && signature === undefined)
      return response.data
    // 验签失败
    // else 
    //   return {
    //     code: 500,
    //     message: '请求响应异常，请重新请求'
    //   }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service