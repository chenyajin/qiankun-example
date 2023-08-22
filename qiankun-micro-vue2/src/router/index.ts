import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import PageOne from '../views/page_one.vue'
import LayoutComponent from '../layout/index.vue'
import { createRouterGuards } from './guards'

Vue.use(VueRouter)

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    redirect: '/page-one',
    component: LayoutComponent,
    meta: {
      breadcrumb: true,
      title: '微应用Vue2',
      microRoute: true
    },
    children: [
      {
        path: '/page-one',
        name: 'page-one',
        component: PageOne,
        meta: {
          breadcrumb: true,
          title: '微应用Vue2页面一',
          microRoute: true
        }
      },
      {
        path: '/page-two',
        name: 'page-two',
        component: () => import(/* webpackChunkName: "about" */ '../views/page_two.vue'),
        meta: {
          breadcrumb: true,
          title: '微应用Vue2页面二',
          microRoute: true
        }
      }
    ]
  }
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: PageOne,
  //   meta: {
  //     breadcrumb: true,
  //     title: '微应用Vue2',
  //     microRoute: true
  //   }
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
createRouterGuards(router)

export default router
