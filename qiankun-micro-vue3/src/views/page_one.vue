<template>
  <div class="home">
    <HelloWorld msg="Welcome to qiankun-micro-vue3 page-one" />
    <ViewComponent />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/hello_world.vue'
import ViewComponent from '@/components/view_component.vue'

defineOptions({
  name: 'PageOne'
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
