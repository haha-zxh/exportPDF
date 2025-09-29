const breadcrumb = {
  state: {
    breadcrumbList: []
  },
  mutations: {
    SET_BREADCRUMB_LIST: (state, info) => {
      state.breadcrumbList = info
    }
  },
  actions: {
    ADD_BREADCRUMB ({ state, commit}, data) {
      return new Promise(resolve => {
        commit('SET_BREADCRUMB_LIST', [...state.breadcrumbList, data])
        resolve()
      })
    }
  }
}

export default breadcrumb