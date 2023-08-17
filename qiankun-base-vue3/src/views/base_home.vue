<template>
  <div class="home">
    <!-- <img alt="Vue logo" :src="Logo" class="logo-img" /> -->
    <HelloWorld msg="Welcome to qiankun-base-vue3 page-one" />
    <ViewComponent />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/hello_world.vue'
import ViewComponent from '@/components/view_component.vue'
// import Logo from '@/assets/logo.svg'
defineOptions({
  name: 'BaseHome'
})
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
