/*
 * @Author: ChenYaJin
 * @Date: 2023-08-22 10:32:50
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-08-22 15:10:07
 * @Description:
 */

import { Router } from 'vue-router'
import { useBreadcrumbStoreWithOut } from '@/stores/breadcrumb'

export function createRouterGuards(router: Router) {
  router.afterEach((to) => {
    const matched = to.matched.filter((item) => item.meta && item.meta.breadcrumb)
    useBreadcrumbStoreWithOut().setBaseBreadcrumb(matched)
  })
  router.onError((error) => {
    console.log(error, '路由错误')
  })
}
