<template>
  <el-config-provider :size="elConfig.size" :z-index="elConfig.zIndex" :locale="zhCn">
    <RouterView />
  </el-config-provider>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const elConfig = ref({
  size: 'default',
  zIndex: 300
})
</script>
