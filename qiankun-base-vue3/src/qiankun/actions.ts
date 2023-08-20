/*
 * @Author: ChenYaJin
 * @Date: 2023-08-13 13:17:04
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-08-20 12:42:33
 * @Description: 基座与微应用通信的数据
 */
import { initGlobalState, MicroAppStateActions } from 'qiankun'
export type GlobalState = {
  name: string
  age: number
}
// 初始化 state
const initState = reactive({
  user: {
    name: '张三',
    age: 100
  }
})

const actions: MicroAppStateActions = initGlobalState(initState)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
actions.getGlobalState = () => {
  return initState
}

export default actions
