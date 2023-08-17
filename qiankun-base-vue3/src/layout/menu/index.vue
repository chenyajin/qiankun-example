<!--
 * @Author: ChenYaJin
 * @Date: 2023-08-13 13:17:04
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-08-17 17:13:36
 * @Description: 左侧菜单
-->
<template>
  <el-container style="height: 100%">
    <el-aside width="200px">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        :router="true"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <I class="i-ep-user"></I>
            <span>主应用 Vue3</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" route="/base-home">主应用 页面一</el-menu-item>
            <el-menu-item index="1-2" route="/base-one-page">主应用 页面二</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <I class="i-ep-user"></I>
            <span>微应用 Vue2 </span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" route="/micro-vue2/page-one"> 页面一</el-menu-item>
            <el-menu-item index="2-2" route="/micro-vue2/page-two"> 页面二</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <I class="i-ep-user"></I>
            <span>微应用 Vue3 </span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1" route="/micro-vue3/page-one"> 页面一</el-menu-item>
            <el-menu-item index="3-2" route="/micro-vue3/page-two"> 页面二</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-aside>
  </el-container>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Menu'
})

const handleOpen = () => {
  // console.log(key, keyPath)
}
const handleClose = () => {
  // console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  border-radius: 10px;
  background: rgb(51, 154, 223);
}
:deep(.el-menu) {
  height: 100%;
}
</style>
