import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageOne from '../views/page_one.vue'

Vue.use(VueRouter)

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: PageOne
  },
  {
    path: '/page-one',
    name: 'page-one',
    component: PageOne
  },
  {
    path: '/page-two',
    name: 'page-two',
    component: () => import(/* webpackChunkName: "about" */ '../views/page_two.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
