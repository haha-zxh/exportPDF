import userApi from '@/apis/user'
import { setUserInfo } from '@/utils/auth'
import { ElMessage } from 'element-plus'
import Download from '@/utils/download.js'
import avatarUrl from '@/assets/images/header/avatar.png'

const user = {
  state: {
    info: {},
    avatarUrl: avatarUrl,
    permissions: [],
    role: '',
    status: ''
  },

  mutations: {
    SET_INFO: (state, info) => {
      state.info = info
    },
    SET_AVATAR_URL: (state, avatarUrl) => {
      state.avatarUrl = avatarUrl
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    },
    SET_ROLEID: (state, role) => {
      state.permissions = role
    },
    SET_ROLESTATUS: (state, status) => {
      state.status = status
    }
  },
  actions: {
    /**
     * @description: 获取用户信息
     * @return {*}
     */
    getUserInfo: ({ commit, dispatch }) => {
      return userApi.getUserInfo().then(res => {
        if (res.code === 200 ){
          setUserInfo(res.data)
          commit('SET_INFO', res.data)
          dispatch('getUserAvatar')
        } else {
          ElMessage({ message: res.message, type: 'error', customClass: 'core-message' })
        }
      })
    },
    /**
     * @description: 获取用户头像信息
     * @return {*}
     */    
    async getUserAvatar({ state, commit }){
      const imgList = await Download.downloadImage([ state.info.avatar ])
      if (imgList && imgList.length > 0) {
        commit('SET_AVATAR_URL', imgList[0].url)
      }
    }
  }
}

export default user
