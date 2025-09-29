/*
 * @Description: 信息推送api
 */
import request from '@/utils/request'

class Push {
  
  /**
   * @description: 发送手机验证码
   * @param {*}  
   * @return {*} 
   */  
  async getPhoneCode(params){
    return await request({
      url: '/ctjt/push/send/phone/code',
      method: 'get',
      params
    })
  }

  /**
   * @description: 校验手机验证码
   * @param {*}  
   * @return {*} 
   */  
  async postCheckPhoneCode(data){
    return await request({
      url: '/ctjt/push/check/phone/code',
      method: 'post',
      data
    })
  }

  /**
   * @description: 发送邮箱验证码
   * @param {*}  
   * @return {*} 
   */  
  async getEmailCode(params){
    return await request({
      url: '/ctjt/push/send/email/code',
      method: 'get',
      params
    })
  }

  /**
   * @description: 校验邮箱验证码
   * @param {*}  
   * @return {*} 
   */  
  async postCheckEmailCode(data){
    return await request({
      url: '/ctjt/push/check/email/code',
      method: 'post',
      data
    })
  }

  /**
   * @description: 发送激活邮件【免token】
   * @param {*}  
   * @return {*} 
   */  
  async sendEmailActivate(params){
    return await request({
      url: '/ctjt/push/send/email/activate',
      method: 'get',
      params
    })
  }
  
}

export default new Push()