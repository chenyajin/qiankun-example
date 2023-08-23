<!--
 * @Author: ChenYaJin
 * @Date: 2023-08-17 16:37:30
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-08-23 11:27:09
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

    <h2># element-ui 组件样式预览2</h2>
    <el-button @click="dialogVisible = true"> click to open the Dialog </el-button>
    <el-dialog
      title="提示"
      :visible="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import actions from '@/qiankun/actions'

export default Vue.extend({
  name: 'ViewComponent',
  data: () => {
    return {
      info: {
        name: '',
        age: 0
      },
      dialogVisible: false
    }
  },
  mounted () {
    if (actions.getGlobalState instanceof Function) {
      this.info = actions.getGlobalState().user
    }
  },
  methods: {
    submit () {
      actions.actions.setGlobalState({
        user: this.info
      })
    },
    handleClose (done: () => void) {
      this.$confirm('Are you sure to close this dialog?')
        .then(() => {
          done()
        })
        .catch((e) => e)
    }
  }
})
</script>

<style scoped></style>
