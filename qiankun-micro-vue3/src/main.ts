import './styles/main.css'

import ElementPlus from 'element-plus'
import { setupRouter } from '@/router'
import { setupStores } from '@/stores'
import { createApp } from 'vue'
import App from './App.vue'
import actions from '@/qiankun/actions'
import { renderWithQiankun, qiankunWindow, QiankunProps } from 'vite-plugin-qiankun/dist/helper'

const render = (props: QiankunProps = {}) => {
  const {
    container,
    router: parentRouter,
    onGlobalStateChange,
    setGlobalState,
    offGlobalStateChange,
    getGlobalState
  } = props

  const parentActions = {
    onGlobalStateChange,
    setGlobalState,
    offGlobalStateChange,
    getGlobalState
  }
  actions.setActions(parentActions, parentRouter)
  const app: string | Element = container?.querySelector('#subVue3App') || '#subVue3App' // 避免 id 重复导致微应用挂载失败
  const instance = createApp(App)
  instance.use(ElementPlus)
  setupStores(instance)
  setupRouter(instance)
  instance.mount(app)
}

const initQianKun = () => {
  renderWithQiankun({
    bootstrap() {
      console.log('微应用：bootstrap')
    },
    mount(props) {
      console.log('微应用：mount', props)
      render(props)
    },
    unmount(props) {
      console.log('微应用：unmount', props)
    },
    update(props) {
      console.log('微应用：update', props)
    }
  })
}

// 判断是否使用 qiankun ，保证项目可以独立运行
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
