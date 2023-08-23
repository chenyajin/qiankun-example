# qiankun-example 实战

[qiankun](https://qiankun.umijs.org/zh/) 实战篇，主应用 vue3+vite，微应用用 vue2 和 vue3

> - **主应用** qiankuan-base-vue3
>   [vue3](https://vuejs.org/) + [vite](https://vitejs.dev/) + [unocss](https://unocss.dev/guide/)
> - **微应用** qiankun-micro-vue3
>   [vue3](https://vuejs.org/) + [vite](https://vitejs.dev/)
> - **微应用** qiankun-micro-vue2
>   [vue2](https://vuejs.org/) + [webpack](https://www.webpackjs.org/)

## 🍎 环境

- node 16.14.2 +
- pnpm 8.5.1 +

## 🎃 功能清单

- [x] 主应用/微应用间路由相互跳转
- [x] 全局数据通信
- [x] 路由面包屑
- [x] 主题样式隔离
  - element-plus: 使用[自定义命名空间](https://element-plus.gitee.io/zh-CN/guide/namespace.html)。
- [ ] unocss 样式隔离

## ✋ 快速开始

```shell

# 克隆项目
git clone https://github.com/chenyajin/qiankun-example.git

# 进入项目
cd qiankun-example

# 安装根目录工程依赖
pnpm i

#一键安装所有主/微应用的依赖
npm run install

# 一键启动所有所有应用
npm run start

```

通过 [http://127.0.0.1:5173/](http://127.0.0.1:5173/) 访问主应用。

## 💣 问题记录

- **<span style="color:green;">子应用 vue2 版本需要升级到 v2.7.8,才可以避免一些报错。</span>**

  > Vue version 2.6.x 时，会遇到此报错：Property or method “\_\_v_isRef” is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property。
  > 报错时间点：应用了 qiankun 微前端架构，在主应用和子应用之间进行传值时发生。
  > 报错原因：尚不明确，猜测是主应用响应式数据传递给子应用，子应用对该数据进行了递归响应式处理。
  > 解决方法：升级 Vue 版本到 2.7.8，对应的 vue-template-compiler 也升级到 2.7.8。

- **<span style="color:green;">element-plus 主题样式隔离，需区分是全局引入 or 按需引入。</span>**
  > qiankun 自己的样式隔离方案： shadow dom 和 scoped，目前都存在明显问题。所以在本例子里没有采用，而是用了 vue 的 scoped css 来实现。[文章](https://zhuanlan.zhihu.com/p/596349482)
  >
  > 全局引入配置仍需加上 [参考官方模版](https://github.com/element-plus/element-plus-vite-starter/blob/main/src/styles/element/index.scss)
  >
  > ```css
  > // styles/element/index.scss
  >
  > @use 'element-plus/theme-chalk/src/index.scss' as *;
  > ```
  >
  > 按需引入配置仍需加上 [参考官方模版](https://github.com/element-plus/element-plus-vite-starter)
  >
  > ```js
  > // vite.config.ts
  > import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
  >
  > Components({
  >   resolvers: [
  >     ElementPlusResolver({
  >       importStyle: 'sass',
  >     }),
  >   ],
  > })
  > ```
