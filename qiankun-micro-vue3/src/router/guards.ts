/*
 * @Author: ChenYaJin
 * @Date: 2023-08-22 10:32:50
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-08-22 11:27:52
 * @Description:
 */

import { Router } from 'vue-router'
import actions from '@/qiankun/actions'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

export function createRouterGuards(router: Router) {
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
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
