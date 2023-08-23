<template>
  <el-config-provider :z-index="elConfig.zIndex" :locale="zhCn" namespace="ep">
    <RouterView />
  </el-config-provider>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const elConfig = ref({
  zIndex: 300
})
</script>
