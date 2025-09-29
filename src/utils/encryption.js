/*
 * @Description: AES加密
 */
import CryptoJS from 'crypto-js'

class Encryption {
  constructor() {
    // 进行UTF-8编码
    this.gdKey = 'AITHGBVPOKIYTRFG'
    this.key = CryptoJS.enc.Utf8.parse(this.gdKey)
    this.iv = CryptoJS.enc.Utf8.parse('')
    this.mode = CryptoJS.mode.ECB
    this.padding =  CryptoJS.pad.Pkcs7
  }

  /**
   * 使用CryptoJS库提供的AES算法进行加密
   * @param {any} data - 需要加密的数据，Base64 编码格式字符串
   * @returns {string} - 编码后的加密字符串
   */
  encrypt(data) {
    if ( !data && !data.length) return data
    const encrypted = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(data),
      this.key,
      {
        iv: this.iv ,
        mode: this.mode, // 加密模式为ECB
        padding: this.padding // 补码方式为NoPadding
      }
    )
    // 将加密后的数据进行Base64编码，并返回编码后的字符串
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
  }

  /**
   * 使用CryptoJS库提供的AES算法进行解密
   * @param {string} data - 待解密的数据，Base64 编码格式
   * @returns {string} - 解密后的数据
   */
  decrypt(data) {
    if ( !data && !data.length) return data
    // 使用 AES 解密算法进行解密
    const decrypt = CryptoJS.AES.decrypt(
      CryptoJS.enc.Base64.stringify(CryptoJS.enc.Base64.parse(data)),
      this.key,
      {
        iv: this.iv, // 加密向量
        mode: this.mode, // 加密模式，这里使用 ECB 模式 CBC
        padding: this.padding // 补码方式为NoPadding
      }
    )
    // 将解密后的数据转换为 UTF-8 编码格式的字符串
    return decrypt.toString(CryptoJS.enc.Utf8)
  }

}

export default new Encryption()
