class Regular {

  /**
   * @description: 手机号检验
   * @param {*} value
   * @return {*}
   */  
  phone(value) {
    return /^((0\d{2,3}-?\d{7,8})|(1[3465789]\d{9}))$/.test(value)
  }

  /**
   * @description: 邮箱检验
   * @param {*} value
   * @return {*}
   */  
  email(value) {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
  }

  /**
   * @description: 座机号校验
   * @return {*}
   */  
  landline(value){
    return /^[0][1-9]{2,3}-[0-9]{5,10}$/.test(value)
  }

  /**
   * @description: 第二代身份证号验证
   * @param {*} value
   * @return {*}
   */  
  idCard(value) {
    return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9xX]$/.test(value)
  }
  
  /**
   * @description: 非法字符校验
   * @return {*}
   */  
  illegalCharacterCheck(str) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]")
    if (pattern.test(str)) {
      return true
    }
    return false
  }

  /**
   * @description: 密码 ==> 必须包含大写字母、数字、特殊字符且至少8位
   * @return {*}
   */  
  password(value){
    return /((^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z\W]{8,}$))/.test(value)
  }

  /**
   * @description: 敏感信息脱敏处理
   * @param {*} str 脱敏字符串
   * @param {*} pattern 
   * @param {*} start
   * @param {*} end
   * @return {*}
   */  
  replaceBetween(str = '', pattern = '*', start = 3, end = 4) {
    if (str.length <= start + end) return str
    return str.slice(0, start) + str.slice(start, -end).replace(/./g, pattern) + str.slice(-end)
  }
}
export default new Regular()
