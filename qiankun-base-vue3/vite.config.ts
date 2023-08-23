import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
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
    UnoCSS(),
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
        ElementPlusResolver({
          importStyle: 'sass'
        }), // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep']
        })
      ]
    })
  ],
  server: {
    open: true,
    cors: true,
    host: '127.0.0.1',
    port: 5173,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`
      }
    }
  }
})
