<!--
 * @Author: ChenYaJin
 * @Date: 2023-08-13 13:17:04
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-08-17 17:05:45
 * @Description: 微应用挂载容器
-->
<template>
  <div class="micro-container" element-loading-text="Loading...">
    <div id="sub-app"></div>
  </div>
</template>

<script setup lang="ts">
import { loadMicroApp, addGlobalUncaughtErrorHandler } from 'qiankun'
import { useRoute } from 'vue-router'
import { microApps, registerApps } from '@/micro/micro'

defineOptions({
  name: 'MicroApp'
})

const microList = reactive<Record<string, unknown>>({})
const route = useRoute()
const activationHandleChange = async (path: string) => {
  const activeRules = microApps.map((app) => app.activeRule)
  const isMicro = activeRules.some((rule) => path.startsWith(rule))
  if (!isMicro) return
  const microItem = microApps.find((app) => path.startsWith(app.activeRule.toString()))
  if (!microItem) return
  // 如果已经加载过一次，则无需再次加载
  const current = microList[microItem.activeRule.toString()]
  if (current) return

  // 缓存当前子应用
  const micro = loadMicroApp({ ...microItem })
  microList[microItem.activeRule.toString()] = micro
  try {
    await micro.mountPromise
  } catch (e) {
    console.error('=======', e)
  }
}
// qiankun全局异常捕获
addGlobalUncaughtErrorHandler((event) => console.log(event))
watch(
  () => route.path,
  async (newValue) => {
    activationHandleChange(newValue)
  }
)
onMounted(async () => {
  console.log('MicroApp ======> 进入')
  if (window.qiankunStarted) return
  window.qiankunStarted = true
  registerApps()
  activationHandleChange(route.path)
})
onBeforeUnmount(() => {
  window.qiankunStarted = false
  Object.values(microList).forEach((mic: any) => {
    mic?.unmount()
  })
})
</script>
<style lang="scss" scoped>
.micro-container {
  height: inherit;
}
</style>
