// signatureUtil.js
import md5 from 'js-md5'
/**
 * @description: 签名加密
 * @param {*} data
 * @param {*} url
 * @param {*} params
 * @return {*}
 */
export function signatureGenerate({ data, url, params }) {
  // 判断路径上是否存在参数，存在参数拼接上路径上
  if (params) {
    const urlParams = paramsSerialize(params)
    // console.log(urlParams)
    if (urlParams) 
      url = url + '?' + urlParams
  }
  // 时间戳
  const timestamp = new Date().getTime()
  // post请求体参数序列化拼接
  const dataStr = serializeDataV2(data) + '&'
  // 如果不存‘/’，需要拼接
  if (url.charAt(0) !== '/') 
    url = '/' + url
  // 生成签名
  const str = dataStr + '&timestamp=' + timestamp + '&url=' + url + 'ctjtservice'
  // console.log('签名', str)
  // 加密
  const sign = md5(str)
  // console.log('md5', sign)

  return {
    signature: sign.toUpperCase(), // 将签名字母转为大写
    timestamp
  }
}

// // 参数排序
// function dataSort(obj){
//     if (JSON.stringify(obj) == "{}" || obj == null) {
//         return {}
//     }
//     let key = Object.keys(obj)?.sort()
//     let newObj = {}
//     for (let i = 0; i < key.length; i++) {
//         newObj[key[i]] = obj[key[i]]
//     }
//     console.log(newObj);
//     return newObj
// }

// // 参数序列化
// function dataSerialize(sortObj){
//     let strJoin = ''
//     for(let key in sortObj){
//         strJoin += key + "=" + sortObj[key] + "&"
//     }

//     // return strJoin.substring(0, strJoin.length - 1)
//     console.log(strJoin);
//     return strJoin
// }

/**
 * @description: 对List进行排序
 * @param {List} list 
 * @return {*}
 */
function sortListV2(list) {
  const sortedList = []
  for (const item of list) 
    if (Array.isArray(item)) 
      sortedList.push(sortListV2(item))
    else if (typeof item === 'object' && item !== null) 
      sortedList.push(sortDataV2(item))
    else 
      sortedList.push(item)
  return sortedList
}

/**
 * @description: 对List进行序列化
 * @param {*} list
 * @return {*}
 */
function serializeListV2(list) {
  let result = ''
  for (const item of list) 
    if (Array.isArray(item)) 
      result += serializeListV2(item) + ','
    else if (typeof item === 'object' && item !== null) 
      result += '{' + serializeDataV2(item) + '},'
    else 
      result += item + '&'
  return '[' + result.substring(0, result.length - 1) + ']'
}

/**
 * @description: 序列化data数据
 * @param {*} map
 * @return {*}
 */
function serializeDataV2(map) {
  if (!map) 
    return ''
  const keys = Object.keys(map).sort() // 获取属性名并排序
  let serializeStr = ''
  for (const key of keys) {
    serializeStr += key + '='
    const value = map[key]
    if (Array.isArray(value)) 
      serializeStr += serializeListV2(value) + '&'
    else if (typeof value === 'object' && value !== null) 
      serializeStr += '{' + serializeDataV2(value) + '}&'
    else 
      serializeStr += value + '&'
    
  }
  return serializeStr.substring(0, serializeStr.length - 1)
}

/**
 * @description: 排序data数据
 * @param {*} map
 * @return {*}
 */
function sortDataV2(map) {
  if (!map) 
    return {}
  const keys = Object.keys(map).sort() // 获取属性名并排序
  const sortedMap = {}
  for (const key of keys) {
    const value = map[key]
    if (Array.isArray(value)) 
      sortedMap[key] = sortListV2(value)
    else if (typeof value === 'object' && value !== null) 
      sortedMap[key] = sortDataV2(value)
    else 
      sortedMap[key] = value
  }
  return sortedMap
}

/**
 * @description: 参数序列化
 * @param {*} sortObj
 * @return {*}
 */
function paramsSerialize(sortObj) {
  let strJoin = ''
  paramsSlice(sortObj)
  for (const key in sortObj) 
    if (sortObj[key] !== null && sortObj[key] !== undefined) {
      const lastKey = Object.keys(sortObj).pop()
      if (key === lastKey) 
        strJoin += key + '=' + sortObj[key]
      else 
        strJoin += key + '=' + sortObj[key] + '&'
    }
  // return strJoin.substring(0, strJoin.length - 1)
  // console.log(strJoin)
  return strJoin
}

function paramsSlice(sortObj) {
  for (const key in sortObj) 
    if (sortObj[key] === null || sortObj[key] === undefined)
      delete sortObj[key]
}
