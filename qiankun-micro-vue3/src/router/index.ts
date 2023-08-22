import PageOne from '@/views/page_one.vue'
import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuards } from './guards'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

export const routes = [
  {
    path: '/',
    redirect: '/page-one',
    meta: {
      breadcrumb: true,
      title: '微应用Vue3',
      microRoute: true
    },
    children: [
      {
        path: 'page-one',
        name: 'page-one',
        component: PageOne,
        meta: {
          breadcrumb: true,
          title: '微应用vue3页面一',
          microRoute: true
        }
      },
      {
        path: 'page-two',
        name: 'page-two',
        component: () => import('@/views/page_two.vue'),
        meta: {
          breadcrumb: true,
          title: '微应用vue3页面二',
          microRoute: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? '/micro-vue3' : import.meta.env.BASE_URL
  ),
  routes: routes
})
export function setupRouter(app: App<Element>) {
  app.use(router)
  createRouterGuards(router)
}

export default router
