import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import GlobalView from '@/layout/index.vue'
import BaseHome from '@/views/base_home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/base-home',
      children: [
        {
          path: 'base-home',
          name: 'baseHome',
          component: BaseHome
        },
        {
          path: 'base-one-page',
          name: 'baseOnePage',
          component: () => import('@/views/base_one_page.vue')
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
}

export default router
