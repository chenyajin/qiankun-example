# Vue 3 + TypeScript + Vite

vue3 + ts + vite 模板工程-qiankun微前端主应用

采用 vue3 sfc 写法

包管理工具：pnpm nodejs 版本：v16.x

## css 预设

[unocss](https://unocss.dev/guide/)

unocss vscdoe 插件推荐：

- UnoCSS：用于查看 css 预设的结果
- Iconify IntelliSense： iconify 图标预览

## 图标方案

[iconify](https://iconify.design/)

结合 unocss 来使用 svg 图标，svg 图标库请查看[icones](https://icones.js.org/)，目前仅安装了 element-plus 的图标库。

同时封装了公共组件 `Icon.vue`。

> 自定义的 svg 图标使用请参考文档：https://unocss.dev/presets/icons#customization 对于自定义的 svg 图标，也可以考虑使用[vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md)。

vscode 插件：

- UnoCSS：unocss 规则预览
- Iconify IntelliSense：iconify 图标预览

## unocss 配置说明

本项目已经设置了 unocss 相关配置，主要内容包括：

- 官方预设
- safelist：动态图标方案的解决方案
- shortcuts：用于简化 css 预设的使用
- theme：结合 unocss 的主题方案

## 组件库

[element-plus](https://element-plus.org/)

## 日期时间处理

[dayjs](https://day.js.org/)

## 状态管理

pinia

## 路由

vue-router

动态路由处理

## 网络请求

axios

包括请求拦截、响应拦截，同时添加了请求前和响应后的钩子函数，处理 http 请求的状态码。设置 axios 的取消请求。

## 代码检查方案

### eslint

代码质量检查。

主要插件：

- eslint： JavaScript 和 JSX 检查工具
- eslint-plugin-vue： 使用 ESLint 检查 .vue 文件 的 `<template>` 和 `<script>`，以及.js 文件中的 Vue 代码
- eslint-plugin-prettier： 基于 prettier 代码风格的 eslint 规则，即 eslint 使用 pretter 规则来格式化代码。
- eslint-config-prettier： 禁用所有与格式相关的 eslint 规则，解决 prettier 与 eslint 规则冲突，确保将其放在 extends 队列最后，这样它将覆盖其他配置

### prettier

代码格式检查

### stylelint

css 代码格式，包括 sass 文件以及.vue 文件中的 sass 代码。

主要插件：

- stylelint: css 样式 lint 工具
- postcss: 转换 css 代码工具
- postcss-html: 识别 html/vue 中的`<style></style>`标签中的样式
- stylelint-config-standard: Stylelint 的标准可共享配置规则，详细可查看官方文档
- stylelint-config-prettier: 关闭所有不必要或可能与 Prettier 冲突的规则
- stylelint-config-standard-vue: lint.vue 文件的样式配置
- stylelint-order: 指定样式书写的顺序，在.stylelintrc.js 中 order/properties-order 指定顺序
- stylelint-scss: sass 规则集合
- stylelint-config-recommended-scss: sass 共享配置
- postcss-scss: 识别 sass 语法

### husky

git hook 工具，用于 `git commit` 提交代码时执行代码检查命令。

将会依次执行：

`pnpm lint` -> `pnpm format` -> `pnpm lint:style`
