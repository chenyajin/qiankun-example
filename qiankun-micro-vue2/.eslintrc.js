module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'plugin:@typescript-eslint/recommended'
    // "plugin:prettier/recommended",
  ],
  parserOptions: {
    // 指定ESlint的解析器
    parser: '@typescript-eslint/parser',
    // 允许使用ES语法
    ecmaVersion: 2020,
    // 允许使用import
    sourceType: 'module',
    // 允许解析JSX
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    '@typescript-eslint/eslint-plugin'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    // 'vue/no-parsing-error': [2, {
    //   'x-invalid-end-tag': false
    // }]
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/ban-ts-comment': 'off',
    // '@typescript-eslint/no-unused-vars': 0,
    // '@typescript-eslint/no-empty-function': 0,
    // '@typescript-eslint/no-this-alias': 0,
    // 'vue/no-mutating-props': 'off'
  }
}
