import FileApi from '@/apis/file'
import { ElMessage } from 'element-plus'

export class Download {

  /**
   * @description: 上传一个或多个图片
   * @param {*} files files 文件集
   * @param {*} type 类型（1-登录背景图 2-个人头像)
   * @return {*}
   */  
  async uploadImage(files, type = 1){
    if (!files || !Array.isArray(files)) {
      return []
    } else {
      const paths = []
      // 因为要保证上传顺序，这里用 for...of 处理。下载时也是如此
      for (const file of files) {
        const data = new FormData()
        data.append('file', file)
        data.append('type', type)
        const res = await FileApi.fileUpload(data)
        if (res.code !== 200) {
          ElMessage({ message: '上传图片失败，请重新上传', type: 'error', customClass: 'core-message' })
        }
        paths.push(res.code === 200 ? res.data.path : '')
      }
      return paths
    }
  }

  /**
   * @description: 下载一张或多张图片
   * @param {*} paths path集
   * @return {*}
   */
  async downloadImage(paths){
    if (!paths || !Array.isArray(paths)) {
      return []
    } else {
      const imgList = []
      for (const path of paths) {
        if (path) {
          const file = await FileApi.fileShow({ fileName: path })
          imgList.push({ path, url: URL.createObjectURL(file) })
        } else {
          imgList.push({ path, url: '' })
        }
      }
      return imgList
    }
  }

  /**
   * @description: 通过传入文件集直接上传并得到对应url集
   * @param {*} files files 文件集
   * @param {*} type 类型（1-登录背景图 2-个人头像)
   * @return {*}
   */  
  async getImageByFile(files, type = 1){
    const paths = await this.uploadImage(files, type)
    const imgList = await this.downloadImage(paths)
    return imgList
  }

}

export default new Download()

