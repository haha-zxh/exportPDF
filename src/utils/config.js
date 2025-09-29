import configFile from '../../config.json'

class Config {
  constructor() {
    this.data = configFile
  }

  template(property = '', target = { desc: '' }) {
    if (target === null) {
      return { value: null, desc: target.desc, isActive: false }
    }

    // 如果当前的 isActive状态为 false, 那么则不返回内容, 返回 null
    if (this.active(target)) {
      // 状态为 true的时候, 则返回内容
      // 判断当前对象是否存在 value, 如果存在则判断是否为 object
      if (Reflect.has(target, 'value') && Reflect.get(target, 'value') instanceof Object) {
        // value为对象的时候, 取对象中的 value
        const { value } = target

        // 检查 value中是否存在需要取值的字段
        if (Reflect.has(value, property)) {
          const res = Reflect.get(value, property)
          if (this.active(res)) {
            return res
          } else {
            return { value: null, desc: res.desc, isActive: false }
          }
        } else {
          // value不为对象的时候, 直接返回值
          return Reflect.get(target, 'value')
        }
      } else {
      // 非激活状态返回 null
        return { value: null, desc: target.desc, isActive: false }
      }
    }

    return { value: null, desc: target.desc, isActive: false }
  }

  active(target = '') {
    if (target === null) {
      return false
    }

    if (Reflect.has(target, 'isActive')) {
      return Reflect.get(target, 'isActive')
    }

    return false
  }

  /**
   * 项目基础配置取值 start
   */

  project() {
    return this.template('project', this.data)
  }

  projectVersion() {
    return this.template('version', this.project())
  }

  projectImgUrl() {
    return this.template('imgUrl', this.project())
  }

  projectDevUrl() {
    return this.template('devUrl', this.project())
  }

  /**
   * 项目基础配置取值 end
  */

  /**
   * service配置取值 start
   */
  service() {
    return this.template('service', this.data)
  }
  
  serviceGlobalLogo() {
    return this.template('logo', this.serviceGlobal())
  }

  serviceGlobalTabTitle() {
    return this.template('tabTitle', this.serviceGlobal())
  }
  
  /**
   * service配置取值 start
   */
}

export default new Config()
