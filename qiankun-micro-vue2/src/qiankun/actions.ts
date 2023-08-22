/*
 * @Author: ChenYaJin
 * @Date: 2023-08-13 13:17:04
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-08-22 15:55:06
 * @Description:
 */
import { ActionType, BreadcrumbStoreType, GlobalState, GlobalStateChange } from './type'
function emptyAction () {
  // 提示当前使用的是空 Action
  console.warn('Current execute action is empty!')
}

class Actions {
  // 全局数据
  actions: any = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
    offGlobalStateChange: emptyAction,
    getGlobalState: emptyAction
  }

  // 主应用面包屑store
  breadcrumbStore: BreadcrumbStoreType = {
    setMicroBreadcrumb: () => []
  }

  // 主应用下发基础路由
  routerBase = ''

  /**
   * 设置 actions
   */
  setActions (actions: ActionType, parentRouter: any, breadcrumbStore: any, routerBase: string) {
    this.actions = actions
    this.parentRouter = parentRouter
    this.routerBase = routerBase
    if (breadcrumbStore instanceof Function) {
      this.breadcrumbStore = breadcrumbStore ? breadcrumbStore() : {}
    }
  }

  /**
   * 映射
   */
  onGlobalStateChange (cb: GlobalStateChange<GlobalState>) {
    return this.actions.onGlobalStateChange(cb)
  }

  /**
   * 映射
   */
  setGlobalState (params: GlobalState) {
    return this.actions.setGlobalState(params)
  }

  getGlobalState () {
    return JSON.parse(JSON.stringify(this.actions.getGlobalState()))
  }

  offGlobalStateChange (params: GlobalState) {
    return this.actions.offGlobalStateChange(params)
  }

  parentRouter () {
    return this.parentRouter
  }
}

const actions = new Actions()

export default actions
