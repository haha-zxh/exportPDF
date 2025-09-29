class TimeTools {
  dateRangeWithLast = (year, month) => {
    let zero = month >= 10 ? '-' : '-0'
    const startDate= year + zero + month + '-01T00:00:00'

    const dateEnd = new Date(year, month, 0)
    const curMonth=dateEnd.getMonth() + 1
    const endDate = year + zero + curMonth + '-' + dateEnd.getDate() + 'T23:59:59'
    const dateLastEnd = new Date(year, month - 1, 0)
    const lastMonth = dateLastEnd.getMonth() + 1;
    zero = lastMonth >= 10 ? '-' : '-0'
    const startDateLast = dateLastEnd.getFullYear() + zero + lastMonth + '-01T00:00:00'
    const endDateLast = dateLastEnd.getFullYear() + zero + lastMonth + '-' + dateLastEnd.getDate() + 'T23:59:59'

    return {startDate,endDate,startDateLast,endDateLast,curMonth,lastMonth}
  }
  // TODO: 微信标准化格式化时间
  formatTime = (date) => {
    this.year = date.getFullYear()
    this.month = date.getMonth() + 1
    this.day = date.getDate()
    this.hour = date.getHours()
    this.minute = date.getMinutes()
    this.second = date.getSeconds()

    return `${[this.year, this.month, this.day]
      .map(this.formatNumber)
      .join('/')} ${[this.hour, this.minute, this.second]
        .map(this.formatNumber)
        .join(':')}`
  };

  // TODO: 自定义格式化时间
  // pattern: yyyy -- 代表年 ; MM -- 代表月 ; dd -- 代表日 ; hh -- 小时 ; mm -- 分钟 ; ss -- 秒 ;
  formatTimeInPattern = (date, pattern = '') => {
    if (pattern === '') {
      return this.formatTime(date)
    }

    this.formatTime(date)

    return pattern
      .replace('yyyy', this.year)
      .replace('MM', this.formatNumber(this.month))
      .replace('dd', this.formatNumber(this.day))
      .replace('hh', this.formatNumber(this.hour))
      .replace('mm', this.formatNumber(this.minute))
      .replace('ss', this.formatNumber(this.second))
  };

  // TODO: 加 0工具
  formatNumber = (n) => {
    n = n.toString()
    return n[1] ? n : `0${n}`
  };

  // TODO: uuid生成工具方法
  guid2 = () => {
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
  }

  // TODO: 分钟转毫秒
  min2second = (min) => {
    if (typeof min === 'number') {
      return min * 60 * 1000
    }
    return null
  }

  // TODO: 小时转毫秒
  hour2second = (hour) => {
    if (typeof hour === 'number') {
      return hour * 60 * 60 * 1000
    } else {
      try {
        const str2int = parseInt(hour, 10)
        if (isNaN(str2int)) {
          // new Exception()
        }
        return str2int * 60 * 60 * 1000
      } catch {
        return null
      }
    }
  }

  // TODO: 时间段的时间戳转时间格式
  second2time = (duration, pattern = 'hh:mm:ss') => {
    let second = parseInt((duration / 1000) % 60)
    let min = parseInt(duration / (1000 * 60) % 60)
    const hour = parseInt(duration / (1000 * 60 * 60) % 24)

    // hours = hours < 10 ? '0' + hours : hours
    // minutes = minutes < 10 ? '0' + minutes : minutes
    // seconds = seconds < 10 ? '0' + seconds : seconds

    if (pattern.indexOf('hh') === -1) {
      min = min + hour * 60
      if (pattern.indexOf('mm') === -1) {
        second = second + min * 60
      }
    }

    return pattern
      .replace('hh', this.formatNumber(hour))
      .replace('mm', this.formatNumber(min))
      .replace('ss', this.formatNumber(second))
  }

  /**
   * TODO: 获取当前日期的前 n天
   * @param {*} days
   */
  theDayBefore = (days) => {
    const currentDate = new Date()
    const theDayBefore7Day = currentDate.setDate(currentDate.getDate() - parseInt(days))

    return theDayBefore7Day
  }

  /**
   * TODO: 获取减去对应天数
   * @param {*} days 要减几天
   * @param {*} isNow 是否要精确到现在的时分秒
   * @param {*} pattern 字符串
   */
  intervalInit = (days = 0, isNow = false, pattern = 'yyyy-MM-dd',) => {
    const currentDate = new Date()
    const theDayBeforeDay = currentDate.setDate(currentDate.getDate() - parseInt(days))
    if (isNow) {
      return this.formatTimeInPattern(new Date(theDayBeforeDay), `${pattern} hh:mm:ss`)
    } else {
      return this.formatTimeInPattern(new Date(theDayBeforeDay), pattern) + 'T00:00:00'
    }
  }

  /**
   * TODO: 获取准确的时间
   * @param {*} array
   */
  timeOfReal(array) {
    const options = {
      timeZone: 'Asia/Shanghai',
      year: array.includes('year') ? 'numeric' : undefined,
      month: array.includes('month') ? 'numeric' : undefined,
      day: array.includes('day') ? 'numeric' : undefined,
      hour: array.includes('hour') ? 'numeric' : undefined,
      minute: array.includes('minute') ? 'numeric' : undefined,
      second: array.includes('second') ? 'numeric' : undefined
    }
    const trueTime = new Intl.DateTimeFormat('zh-CN', options).formatToParts(new Date())
    const result = {}
    array.forEach(prop => {
      const part = trueTime.find(part => part.type === prop)
      result[prop] = part ? part.value : undefined
    })
    return result
  }
}

export default new TimeTools()

// 使用样例:

// const util = new Util()
// util.formatTime(new Date())   =>>   2021/07/20 13:53:23
// util.formatTimeInPattern(new Date())  =>>  2021/07/20 13:53:23
// util.formatTimeInPattern(new Date(), 'yyyy')   ==>>  2021
// util.formatTimeInPattern(new Date(), 'yyyyMM')   ==>>  202107
// util.formatTimeInPattern(new Date(), 'yyyyMM dd')   ==>>  202107 20
// util.formatTimeInPattern(new Date(), 'yyyyMM dd hh:mm:ss')   ==>>  202107 20 13:55:45
// util.formatTime(new Date(1635033600))  ==>>   2021/07/20 13:53:23
// util.hour2second(1.5)  ==>>  5400000
// util.second2time(5400000, 'hh:mm:ss')  ==>>  01:30:00
// util.second2time(5400000, 'mm:ss') ==>>  90:00
// util.theDayBefore(7)  ==>>  2021-10-29T10:50:34.661Z  2021-10-22T10:50:34.661Z
// util.timeOfReal(['year', 'month', 'day'])  ==>>  {year: 准确年份，month: 准确月份，day: 准确日期，}
