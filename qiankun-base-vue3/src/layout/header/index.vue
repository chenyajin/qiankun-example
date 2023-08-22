<!--
 * @Author: ChenYaJin
 * @Date: 2023-08-13 13:17:04
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-08-22 15:33:33
 * @Description: 顶部header
-->
<template>
  <div class="header">
    <el-header class="top-header">
      <h3>qiankun主应用header</h3>
      <h3 class="ml-1rem">全局数据 -> Name: {{ state.name }}, Age: {{ state.age }}</h3>
    </el-header>
    <BreadcrumbComponent class="p-20px" />
  </div>
</template>

<script setup lang="ts">
import actions from '@/qiankun/actions'
import BreadcrumbComponent from '@/components/breadcrumb/index.vue'

defineOptions({
  name: 'Header'
})
const state = ref({
  name: '',
  age: null
})
// 初始化
actions.onGlobalStateChange((currentState) => {
  state.value = currentState.user
}, true)
</script>

<style scoped lang="scss">
.header {
  box-shadow: 0 1px 5px #00000026;
}
.top-header {
  @apply flex flex-y-center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
