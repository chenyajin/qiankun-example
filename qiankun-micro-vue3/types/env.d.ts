/*
 * @Author: wjc
 * @Date: 2023-05-07 12:04:34
 * @LastEditors: wjc
 * @LastEditTime: 2023-05-08 08:52:13
 * @Description:
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
