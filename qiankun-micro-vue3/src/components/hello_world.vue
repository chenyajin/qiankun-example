<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="red">{{ msg }}</h1>
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  text-align: center;
}

.red {
  color: red;
}
</style>
