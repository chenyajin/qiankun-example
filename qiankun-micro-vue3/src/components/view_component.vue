<!--
 * @Author: ChenYaJin
 * @Date: 2023-08-17 16:37:30
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-08-20 12:30:22
 * @Description: 
-->
<template>
  <div class="w-full">
    <h2># 全局数据：主应用传给微应用的数据</h2>
    <div class="m-v-0 m-h-auto w-90%">
      <el-form label-width="50px" :model="info" style="max-width: 460px">
        <el-form-item label="Name">
          <el-input v-model.trim="info.name" />
        </el-form-item>
        <el-form-item label="Age">
          <el-input v-model="info.age" type="number" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit"> 同步全局数据 </el-button>
        </el-form-item>
      </el-form>
    </div>

    <h2># element-plus 组件样式预览2</h2>
    <el-button @click="dialogVisible = true"> click to open the Dialog </el-button>

    <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
import actions from '@/qiankun/actions'
// import type { GlobalState } from '@/qiankun/type'

defineOptions({
  name: 'ViewComponent'
})

const dialogVisible = ref(false)
const info = ref({
  name: '',
  age: 0
})

onMounted(() => {
  info.value = actions.getGlobalState().user
})

const submit = () => {
  // 提交更改
  actions.actions.setGlobalState({
    user: info.value
  })
}

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch((e) => e)
}
</script>

<style scoped></style>
