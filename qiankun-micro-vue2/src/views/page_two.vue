<template>
  <div class="home">
    <HelloWorld msg="Welcome to qiankun-micro-vue2 page-two" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/hello_world.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'PageTwo',
  components: {
    HelloWorld
  }
})
</script>
