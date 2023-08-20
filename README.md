# qiankun-example 实战

This template should help get you started developing with Qiankun and Vue 3 and TypeScript in Vite.

## 主应用 qiankuan-base-vue3

- [qiankun](https://qiankun.umijs.org/zh/) + [vue3](https://vuejs.org/) + [vite](https://vitejs.dev/) + [unocss](https://unocss.dev/guide/)

## 微应用 qiankun-micro-vue3

- [qiankun](https://qiankun.umijs.org/zh/) + [vue3](https://vuejs.org/) + [vite](https://vitejs.dev/)

## 微应用 qiankun-micro-vue2

- [qiankun](https://qiankun.umijs.org/zh/) + [vue2](https://vuejs.org/) + [webpack](https://www.webpackjs.org/)

## 环境

- node 16.14.2 +
- pnpm 8.5.1 +

## 快速开始

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

## 问题清单

- [x] 主应用/微应用间路由相互跳转
- [x] 全局数据通信

- [ ] 路由面包屑
- [ ] 主题样式隔离
- [ ] unocss 自定义样式隔离
