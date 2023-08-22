import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'

import { store } from '@/stores'

type BreadcrumbState = {
  breadcrumbList: RouteRecordRaw[]
  baseRouteList: RouteRecordRaw[]
  microRouteList: RouteRecordRaw[]
}
export const useBreadcrumbStore = defineStore({
  id: 'Breadcrumb',
  state: (): BreadcrumbState => {
    return {
      breadcrumbList: [],
      baseRouteList: [],
      microRouteList: []
    }
  },
  getters: {
    getAllBreadcrumb(): RouteRecordRaw[] {
      return [...this.baseRouteList, ...this.microRouteList]
    }
  },
  actions: {
    setMicroBreadcrumb(matchedList: any[]) {
      const list = matchedList.filter((ele) => ele.meta && ele.meta.title && ele.meta.breadcrumb)
      this.microRouteList = list
      debugger
    },
    setBaseBreadcrumb(matchedList: any[]) {
      const list = matchedList.filter((ele) => ele.meta && ele.meta.title && ele.meta.breadcrumb)
      this.baseRouteList = list
      debugger
    }
  }
})

export function useBreadcrumbStoreWithOut() {
  return useBreadcrumbStore(store)
}
