<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Welcome to qiankun-micro-vue2 page-one" />
    <ViewComponent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/hello_world.vue' // @ is an alias to /src
import ViewComponent from '@/components/view_component.vue'

export default Vue.extend({
  name: 'HomeView',
  components: {
    HelloWorld,
    ViewComponent
  }
})
</script>
