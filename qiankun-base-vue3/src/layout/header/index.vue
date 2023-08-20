<!--
 * @Author: ChenYaJin
 * @Date: 2023-08-13 13:17:04
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-08-20 12:44:29
 * @Description: 顶部header
-->
<template>
  <el-header class="header flex flex-y-center">
    <h3>qiankun主应用header</h3>
    <h3 class="ml-1rem">全局数据 -> Name: {{ state.name }}, Age: {{ state.age }}</h3></el-header
  >
</template>

<script setup lang="ts">
import actions from '@/qiankun/actions'

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

<style scoped>
.header {
  box-shadow: 0 1px 5px #00000026;
}
</style>
