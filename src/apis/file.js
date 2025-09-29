/*
 * @Description: 文件api
 */
import request from '@/utils/request'

class File {

  /**
   * @description: 上传文件
   * @return {*}
   */  
  async fileUpload(data){
    return await request({
      url: '/ctjt/file/upload',
      method: 'post',
      data
    })
  }

  /**
   * @description: 上传文件
   * @return {*}
   */  
  async fileShow(params){
    return await request({
      url: '/ctjt/file/show',
      method: 'get',
      responseType: 'blob',
      params
    })
  }

  /**
   * @description: 登录页背景图下载
   * @return {*}
   */  
  async getLoginBackdrop(params){
    return await request({
      url: '/ctjt/file/show/login/backdrop',
      method: 'get',
      responseType: 'blob',
      params
    })
  }
}

export default new File()