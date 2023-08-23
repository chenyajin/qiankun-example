/*
 * @Author: ChenYaJin
 * @Date: 2023-08-13 13:17:04
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-08-23 15:50:55
 * @Description: 微应用挂载相关数据
 */
import { registerMicroApps, start } from 'qiankun'
import actions from '@/qiankun/actions'
// import router from '@/router'
import { useBreadcrumbStoreWithOut } from '@/stores/breadcrumb'

export const apps = [
  {
    name: 'qiankun-micro-vue3',
    entry: import.meta.env.VITE_APP_MICRO_VUE3,
    activeRule: '/micro-vue3'
  },
  {
    name: 'qiankun-micro-vue2',
    entry: import.meta.env.VITE_APP_MICRO_VUE2,
    activeRule: '/micro-vue2'
  }
]
export const microApps = apps.map((item) => {
  return {
    ...item,
    container: '#sub-app', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      router: null,
      breadcrumbStore: useBreadcrumbStoreWithOut,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getGlobalState: actions.getGlobalState // 下发getGlobalState方法
    }
  }
})

export const registerApps = () => {
  registerMicroApps(microApps, {
    beforeLoad: [
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (app) => {
        // store.commit('app/loadingMicro', true)
        console.log('before load app.name====>>>>>', app.name)
      }
    ],
    beforeMount: [
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (app) => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
      }
    ],
    afterMount: [
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (app) => {
        // store.commit('app/loadingMicro', false)
        console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
      }
    ]
  })

  start({
    sandbox: {
      // 开启 shadow dom：主应用影响不了子应用的样式，但是弹窗样式有影响
      // strictStyleIsolation: true
      // 实验性： 通过添加data-qiankun=“”来隔离
      // experimentalStyleIsolation: true
    }
  })
}
