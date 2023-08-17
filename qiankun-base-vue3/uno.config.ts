/*
 * @Author: wjc
 * @Date: 2023-05-07 20:59:28
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-08-17 16:42:51
 * @Description:
 */
import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  transformers: [transformerDirectives()],
  rules: [
    [/^m-h-(.+)$/, ([, d]) => ({ 'margin-left': `${d}`, 'margin-right': `${d}` })],
    [/^m-v-(.+)$/, ([, d]) => ({ 'margin-top': `${d}`, 'margin-bottom': `${d}` })],
    [/^p-h-(.+)$/, ([, d]) => ({ 'padding-left': `${d}`, 'padding-right': `${d}` })],
    [/^p-v-(.+)$/, ([, d]) => ({ 'padding-top': `${d}`, 'padding-bottom': `${d}` })],
    [/^max-w-(\s+)$/, ([, d]) => ({ 'max-width': `${d}` })],
    [/^max-h-[(\s+)]$/, ([, d]) => ({ 'max-height': `${d}` })],
    [/^font-s-(.+)$/, ([, d]) => ({ 'font-size': `${d}` })],
    [/^wh-(.+)$/, ([, d]) => ({ width: `${d}`, height: `${d}` })],
    [/^bg-color-(\w+)$/, ([, d]) => ({ 'background-color': `#${d}` })]
  ]
})
