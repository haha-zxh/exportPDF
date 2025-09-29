import Cookies from 'js-cookie'

// 用户中心 token key
const TokenKey = 'core-token'

const UserInfo = 'user-info'

const UserId = 'user-id'

const Tenant = 'tenant'

// 潮青 token key
const Authorization = 'authorization'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token, date = 1) {
  return Cookies.set(TokenKey, token, { expires: date })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setUserInfo(userInfo) {
  return Cookies.set(UserInfo, JSON.stringify(userInfo))
}

export function getUserInfo() {
  return Cookies.get(UserInfo) ? JSON.parse(Cookies.get(UserInfo)) : null
}

export function removeUserInfo() {
  return Cookies.remove(UserInfo)
}

export function setUserId(id) {
  return Cookies.set(UserId, id)
}

export function getUserId() {
  return Cookies.get(UserId) ? Cookies.get(UserId) : ''
}

export function removeUserId() {
  return Cookies.remove(UserId)
}

export function setAuthorization(token, date = 1) {
  return Cookies.set(Authorization, token, { expires: date })
}

export function getAuthorization() {
  return Cookies.get(Authorization) ? Cookies.get(Authorization) : ''
}

export function removeAuthorization() {
  return Cookies.remove(Authorization)
}

export function setTenant(tenant) {
  return Cookies.set(Tenant, tenant)
}

export function getTenant() {
  return Cookies.get(Tenant) ? Cookies.get(Tenant) : ''
}

export function removeTenant() {
  return Cookies.remove(Tenant)
}




