<!--
 * @Author: ChenYaJin
 * @Date: 2023-08-13 13:17:04
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-08-17 17:06:02
 * @Description: 入口容器
-->
<template>
  <el-container style="height: 100vh">
    <el-aside width="200px" :class="'show-side'">
      <Logo />
      <Menu />
    </el-aside>
    <el-container direction="vertical">
      <Header />
      <!-- <Tabs v-show="showTabs" /> -->
      <el-main>
        <router-view v-slot="{ Component }">
          <keep-alive :include="['qiankunHome']">
            <component :is="Component"></component>
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Menu from './menu/index.vue'
import Logo from './logo/index.vue'
import Header from './header/index.vue'

defineOptions({
  name: 'GlobalView'
})
</script>

<style scoped></style>
