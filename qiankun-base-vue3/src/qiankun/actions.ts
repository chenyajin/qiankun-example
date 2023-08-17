/*
 * @Author: ChenYaJin
 * @Date: 2023-08-13 13:17:04
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-08-17 17:06:59
 * @Description: 基座与微应用通信的数据
 */
import { initGlobalState, MicroAppStateActions } from 'qiankun'

export type GlobalState = {
  name: string
  age: number
}
// 初始化 state
const initState = {
  name: '张三',
  age: 100
}

const actions: MicroAppStateActions = initGlobalState(initState)

// actions.onGlobalStateChange((newState) => {
//   for (const key in newState) {
//     initState[key] = newState[key]
//   }
// })

export default actions
