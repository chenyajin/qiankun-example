<template>
  <div class="layout-bradcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <template v-for="item in levelList">
        <el-breadcrumb-item
          v-if="item.parent"
          :key="item.path"
          :to="{ path: item.path }"
          :data-index="item.path"
        >
          {{ item.meta.title }}
        </el-breadcrumb-item>
        <el-breadcrumb-item v-else :key="`${item.path}-else`">
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useBreadcrumbStoreWithOut } from '@/stores/breadcrumb'

defineOptions({
  name: 'BreadcrumbComponent'
})
const route = useRoute()
const levelList = ref([])
const useBreadcrumbStore = useBreadcrumbStoreWithOut()
const getBreadcrumb = () => {
  useBreadcrumbStore.$subscribe((mutation, state) => {
    if (mutation.storeId === 'Breadcrumb') {
      levelList.value = route.path.startsWith('/micro') ? state.microRouteList : state.baseRouteList
      debugger
    }
  })
}
onMounted(() => {
  getBreadcrumb()
})
</script>

<style scoped></style>
