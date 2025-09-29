import {createStore} from 'vuex'
import getters from './getter'
import user from './modules/user'
import breadcrumb from './modules/breadcrumb'

const store = createStore({
  modules: {
    user,
    breadcrumb
  },
  getters
})

export default store