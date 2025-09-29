/*
 * @Description: 二维码api
 */
import request from '@/utils/request'

class QrCode {
 
  /**
   * @description: 获取租户app信息
   * @param {*} data 
   * @return {*} 
   */  
  async getWxQrcodeLink(appid){
    return await request({
      url: `/ctjt/wx/qrcode/${appid}/link`,
      method: 'get'
    })
  }
  
}

export default new QrCode()