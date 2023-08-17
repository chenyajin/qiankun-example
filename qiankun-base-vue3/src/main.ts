import './styles/main.css'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import { setupRouter } from '@/router'
import { setupStores } from '@/stores'
import 'virtual:uno.css'
import '@unocss/reset/normalize.css'

function bootstrap() {
  const app = createApp(App)
  app.use(ElementPlus)
  setupStores(app)
  setupRouter(app)
  app.mount('#app')
}
// 挂载vue3实例
bootstrap()
