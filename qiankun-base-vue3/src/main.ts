import './styles/main.css'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupStores } from '@/stores'
import { getUserInfo } from '@/utils/index'

import { registerMicroApps, start } from 'qiankun'

function bootstrap() {
  const app = createApp(App)
  app.use(ElementPlus)
  setupStores(app)
  setupRouter(app)
  app.mount('#app')
}
// 挂载vue3实例
bootstrap()

// registerMicroApps([
//   {
//     name: 'qiankun-micro-vue3',
//     entry: import.meta.env.VITE_APP_MICRO_VUE3,
//     container: '#sub-app',
//     activeRule: 'micro-vue3',
//     props: {
//       mainRouter: router,
//       user: getUserInfo(),
//       routerBase: '/micro-vue3'
//     }
//   },
//   {
//     name: 'qiankun-micro-vue2',
//     entry: import.meta.env.VITE_APP_MICRO_VUE2,
//     container: '#sub-app',
//     activeRule: 'micro-vue2',
//     props: {
//       mainRouter: router,
//       user: getUserInfo(),
//       routerBase: '/micro-vue2'
//     }
//   }
// ])
// // 启动 qiankun
// start()
