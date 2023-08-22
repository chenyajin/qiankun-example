/*
 * @Author: ChenYaJin
 * @Date: 2023-08-22 10:32:50
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-08-22 15:50:47
 * @Description:
 */

import VueRouter from 'vue-router'
import actions from '@/qiankun/actions'

export function createRouterGuards (router: VueRouter) {
  if (window.__POWERED_BY_QIANKUN__) {
    router.afterEach((to) => {
      const matched = to.matched
        .filter((item) => item.meta && item.meta.microRoute)
        .map((item) => {
          return {
            ...item,
            path: `${actions.routerBase}${item.path}`
          }
        })
      actions.breadcrumbStore?.setMicroBreadcrumb(matched)
    })
  }
  router.onError((error) => {
    console.log(error, '路由错误')
  })
}
