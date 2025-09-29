import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'root',
    meta: {hidden: true},
    redirect: '/table'
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('@/views/table/tablePdf.vue'),
    meta: {hidden: true, title: '表格', icon: '', choiceIcon: ''}
  }
]

export {routes}

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
