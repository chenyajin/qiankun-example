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
        <div>
          <h1>主应用的数据 -> 姓名: {{ state.name }}, 数量: {{ state.count }}</h1>
          <el-button type="danger" @click="changeMainState">改变数据</el-button>
        </div>
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
import actions, { GlobalState } from '@/qiankun/actions'
import { setUserInfo } from '@/utils/index'

defineOptions({
  name: 'GlobalView'
})

const state = reactive({
  name: '',
  count: 0
})

actions.onGlobalStateChange((currentState: GlobalState) => {
  state.name = currentState.name
  state.count = currentState.count
}, true)

const changeMainState = () => {
  actions.setGlobalState({
    name: '李四',
    count: state.count + 10
  })
}

// onMounted(() => {
//   const info = JSON.stringify({
//     id: '7876945684',
//     name: '张三',
//   })
//   setUserInfo(info)
// }),
</script>

<style scoped></style>
