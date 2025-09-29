/*
 * @Description: 权限获取
 */
import router from './router'
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/auth'

// 白名单
const whiteList = [
  '/safetyLogin',
  '/szcqLogin', 
  '/powerLogin',
  '/404'
]

router.beforeEach((to, from, next) => {
  next()
  // if (whiteList.includes(to.path)) {
  //   next()
  // } else {
  //   if (getToken()) {
  //     next()
  //     // TODO 路由权限
  //   } else {
  //     next(from.path)
  //   }
  // }
})

router.afterEach(() => {
})
