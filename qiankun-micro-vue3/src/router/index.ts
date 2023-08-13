import PageOne from '@/views/page_one.vue'
import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

export const routes = [
  {
    path: '/',
    redirect: '/page-one',
    children: [
      {
        path: 'page-one',
        name: 'page-one',
        component: PageOne
      },
      {
        path: 'page-two',
        name: 'page-two',
        component: () => import('@/views/page_two.vue')
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
}

export default router
