/*
 * @Description: 租户api
 */
import request from '@/utils/request'

class Tenant {
 
  /**
   * @description: 所有租户平台名称
   * @return {*}
   */  
  async getAllTenant(){
    return await request({
      url: '/ctjt/tenant/all/platform/name',
      method: 'get',
    })
  }

  /**
   * @description: 获取租户app信息
   * @param {*} data 
   * @return {*} 
   */  
  async getTenantAppConfig(){
    return await request({
      url: '/ctjt/tenant/app/config',
      method: 'get'
    })
  }

  /**
   * @description: 找回密码规则
   * @param {*} data 
   * @return {*} 
   */  
  async getTenantFindPwdConfig(){
    return await request({
      url: `/ctjt/tenant/find/pwd/config`,
      method:'get',
    })
  }

  /**
   * @description: 修改租户的登录配置
   * @param {*} data 
   * @return {*} 
   */  
  async editLoginConfig(data){
    return await request({
      url: `/ctjt/tenant/edit/login/config`,
      method: 'put',
      data
    })
  }
  
  /**
   * @description: 修改密码配置信息
   * @return {*}
   */  
  async editPwdConfig(data){
    return await request({
      url: `/ctjt/tenant/edit/pwd/config`,
      method: 'put',
      data
    })
  }

  /**
   * @description: 租户的登录配置
   * @param {*} data 
   * @return {*} 
   */  
  async getTenantLoginConfig(id){
    return await request({
      url: `/ctjt/tenant/id/${id}/login/config`,
      method:'get',
    })
  }

  /**
   * @description: 获取租户的密码配置信息
   * @return {*}
   */  
  async getPwdConfig(id){
    return await request({
      url: `/ctjt/tenant/id/${id}/pwd/config`,
      method: 'get',
    })
  }

  /**
   * @description: 获取租户初始登录配置 (参数在请求头上，根据请求头获取不一样的租户信息)
   * @return {*}
   */  
  async getTenantLoginConfig(){
    return await request({
      url: '/ctjt/tenant/login/config',
      method: 'get',
    })
  }

  /**
   * @description: 获取租户密码规则
   * @return {*}
   */  
  async getTenantPwdConfig(){
    return await request({
      url: '/ctjt/tenant/pwd/config',
      method: 'get',
    })
  }

}

export default new Tenant()