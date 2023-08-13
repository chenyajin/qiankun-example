/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

// https://eslint.nodejs.cn/
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    // 指定eslint解析器
    parser: '@typescript-eslint/parser',
    // 允许使用 import
    sourceType: 'module',
    // 允许解析 jsx
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/valid-template-root': [0],
    'vue/no-reserved-component-names': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off'
  }
}
