<template>
  <div class="home">
    <img alt="Vue logo" :src="Logo" class="logo-img" />
    <!-- <el-button type="primary" @click="handlerClick">11</el-button> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import Logo from '@/assets/logo.svg'
defineOptions({
  name: 'BaseHome'
})
// const store = useStore()
// const handlerClick = () => {
// store.commit('user/addAge')
// }
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo-img {
  width: 100px;
}
</style>
