/*
 * @Author: ChenYaJin
 * @Date: 2023-08-13 13:17:04
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-08-20 12:50:49
 * @Description:
 */
import { ActionType, GlobalState, GlobalStateChange } from './type'
function emptyAction () {
  // 提示当前使用的是空 Action
  console.warn('Current execute action is empty!')
}

class Actions {
  // 默认值为空 Action
  actions: any = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
    offGlobalStateChange: emptyAction,
    getGlobalState: emptyAction
  }

  /**
   * 设置 actions
   */
  setActions (actions: ActionType, parentRouter: any) {
    this.actions = actions
    this.parentRouter = parentRouter
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
