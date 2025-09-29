/*
 * @Description: 密码规则api
 */
import request from '@/utils/request'

class Password {
 
  /**
   * @description: 获取密码锁定方式
   * @return {*}
   */  
  async getPwdLockWay(){
    return await request({
      url: `/ctjt/pwd/lock/way`,
      method: 'get'
    })
  }

  /**
   * @description: 编辑密码锁定方式
   * @return {*}
   */  
  async editLockWay(data){
    return await request({
      url: `/ctjt/pwd/edit/lock/way`,
      method: 'put',
      data
    })
  }
  
}

export default new Password()