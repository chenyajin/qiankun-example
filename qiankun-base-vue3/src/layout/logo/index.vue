<!--
 * @Author: ChenYaJin
 * @Date: 2023-08-13 13:17:04
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-08-17 17:06:27
 * @Description: 左侧logo
-->
<template>
  <div class="logo-container">
    <h1><img alt="Vue logo" :src="LogoSvg" class="logo-img" />Logo</h1>
  </div>
</template>

<script setup lang="ts">
import LogoSvg from '@/assets/logo.svg'

defineOptions({
  name: 'Logo'
})
</script>

<style lang="scss" scoped>
.logo-container {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
  width: 100%;
  background-color: #545c64;
  color: #fff;
  h1 {
    font-size: 20px;
    white-space: nowrap;
    color: var(--system-logo-color);
  }
  .logo-img {
    width: 20px;
    margin-right: 0.5rem;
  }
}
</style>
