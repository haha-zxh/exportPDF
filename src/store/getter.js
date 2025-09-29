const getters = {
  userInfo: state => state.user.info,
  avatarUrl: state => state.user.avatarUrl,
  userName: state => state.user.info.name,
  permissions: state => state.user.permissions,
  breadcrumbList: state => state.breadcrumb.breadcrumbList
}

export default getters
