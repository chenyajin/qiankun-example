<template>
  <el-config-provider :z-index="elConfig.zIndex" :locale="zhCn" namespace="ep-base">
    <Layout />
  </el-config-provider>
</template>
<script setup lang="ts">
import Layout from '@/layout/index.vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const elConfig = {
  zIndex: 300
}
</script>
