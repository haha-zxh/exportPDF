import Layout from '@/components/layout/Layout.vue'
import {createRouter, createWebHistory} from 'vue-router'

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
  history: createWebHistory(),
  routes
})

export default router
