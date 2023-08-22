import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuards } from './guards'
import BaseHome from '@/views/base_home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/base-home',
      meta: {
        breadcrumb: true,
        title: '主应用Vue3'
      },
      children: [
        {
          path: 'base-home',
          name: 'baseHome',
          component: BaseHome,
          meta: {
            breadcrumb: true,
            title: '主应用页面一'
          }
        },
        {
          path: 'base-one-page',
          name: 'baseOnePage',
          component: () => import('@/views/base_one_page.vue'),
          meta: {
            breadcrumb: true,
            title: '主应用页面二'
          }
        },
        {
          path: '/:micro(micro_vue3|micro_vue2||micro_react):endPath(.*)',
          name: 'micro_app',
          meta: { title: '微前端应用' },
          component: () => import('@/micro/micro_app.vue')
        }
      ]
    }
  ]
})

export function setupRouter(app: App<Element>) {
  app.use(router)
  createRouterGuards(router)
}

export default router
