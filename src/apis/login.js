/*
 * @Description: 登录api
 */
import request from '@/utils/request'
class Login {
 
  /**
   * @description: 退出登录
   * @param {*} data 
   * @return {*} 
   */  
  async logout(){
    return await request({
      url: '/ctjt/anno/logout',
      method: 'post'
    })
  }

  /**
   * @description: 获取登录时的手机验证码
   * @param {*} data 
   * @return {*} 
   */  
  async phoneLogin(data){
    return await request({
      url: '/ctjt/anno/p/login',
      method: 'post',
      data
    })
  }

  /**
   * @description: 扫码后登录
   * @param {*} data 
   * @return {*} 
   */  
  async qrcodeLogin(data){
    return await request({
      url: `/ctjt/anno/s/login`,
      method: 'post',
      data
    })
  }

  /**
   * @description: 登录时,发送手机验证码【无需token】
   * @param {*} data 
   * @return {*} 
   */  
  async sendPhoneCode(params){
    return await request({
      url: '/ctjt/anno/send/phone/code',
      method: 'get',
      params
    })
  }

  /**
   * @description: 账密登录
   * @param {*} data 
   * @return {*} 
   */  
  async pwdLogin(data){
    return await request({
      url: '/ctjt/anno/z/login',
      method:'post',
      data
    })
  }
}

export default new Login()