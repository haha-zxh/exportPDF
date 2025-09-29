/*
 * @Description: 用户api
 */
import request from '@/utils/request'

class User {

  /**
   * @description: 用户开关
   * @param {*} data 
   * @return {*} 
   */  
  async postUserEnable(data){
    return await request({
      url: ' /ctjt/user/enable',
      method: 'post',
      data
    })
  }

  /**
   * @description: 找回密码
   * @param {*} data 
   * @return {*} 
   */  
  async putFindPwd(data) {
    return await request({
      url: '/ctjt/user/find/pwd',
      method: 'put',
      data
    })
  }

  

  /**
   * @description: 用户信息
   * @param {*} data 
   * @return {*} 
   */  
  async getUserInfo(){
    return await request({
      url: '/ctjt/user/info',
      method: 'get'
    })
  }

  /**
   * @description: 修改邮箱号
   * @param {*}  
   * @return {*} 
   */  
  async updateUserEmail(data){
    return await request({
      url: '/ctjt/user/update/email',
      method: 'put',
      data
    })
  }

  /**
   * @description: 修改头像
   * @param {*}  
   * @return {*} 
   */  
  async updatePersonAvatar(data){
    return await request({
      url: '/ctjt/user/update/person/avatar',
      method: 'put',
      data
    })
  }

  /**
   * @description: 修改手机号
   * @param {*}  
   * @return {*} 
   */  
  async putUserUpdatePhone(data){
    return await request({
      url: '/ctjt/user/update/phone',
      method: 'put',
      data
    })
  }
 
  /**
   * @description: 修改微信号
   * @param {*}  
   * @return {*} 
   */  
  async putUserUpdateWechat(data){
    return await request({
      url: '/ctjt/user/update/wechat',
      method: 'put',
      data
    })
  }

  
  /**
   * @description: 根据账号获取用户信息 (登录页找回密码时用到)
   * @param {*}  
   * @return {*} 
   */  
  async getUserVerifyAccount(params){
    return await request({
      url: '/ctjt/user/verify/account',
      method: 'get',
      params
    })
  }
  
}

export default new User()