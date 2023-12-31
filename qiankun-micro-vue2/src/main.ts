import './public-path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './router'
import { createRouterGuards } from './router/guards'
// import store from './store';
import actions from './qiankun/actions'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import { QiankunProps } from 'vite-plugin-qiankun/dist/helper'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.use(VueRouter)

let router = null
let instance: any
function render (props: QiankunProps = {}) {
  const {
    container,
    onGlobalStateChange,
    setGlobalState,
    offGlobalStateChange,
    getGlobalState,
    router: parentRouter,
    breadcrumbStore,
    routerBase
  } = props

  const parentActions = {
    onGlobalStateChange,
    setGlobalState,
    offGlobalStateChange,
    getGlobalState
  }
  actions.setActions(parentActions, parentRouter, breadcrumbStore, routerBase)
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/micro-vue2' : '/',
    mode: 'history',
    routes
  })
  createRouterGuards(router)
  const app: string | Element =
    container?.querySelector('#subVue2App') || '#subVue2App'

  instance = new Vue({
    router,
    render: (h) => h(App)
  }).$mount(app)
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}
export async function mount (props: QiankunProps) {
  console.log('[vue] props from main framework', props)
  render(props)
}
export async function unmount () {
  instance?.$destroy?.()
  // instance._container.innerHTML = ''
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
