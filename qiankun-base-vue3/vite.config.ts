import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 按需引入
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/ // .vue
      ],
      dirs: ['./src'],
      imports: ['vue', 'vue-router'], // 限定范围为 vue, vue-router
      dts: 'types/auto-import.d.ts', // 自动生成 'auto-import.d.ts'全局声明
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      // 按需导入组件，相关组件声明放置于 components.d.ts
      dts: './types/components.d.ts',
      resolvers: [
        ElementPlusResolver(), // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep']
        })
      ]
    })
  ],
  server: {
    open: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})