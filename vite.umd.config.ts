import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),  // 构建库的入口文件
      name: 'UtopiaUi', // 指定库的全局变量名（当构建格式为 UMD 或 IIFE 时会用到），挂载在 window上，console.log(window.UtpElement)
      fileName: 'utopia-ui', // 指定输出的文件名
      formats: ['umd']
    },
    outDir: 'dist/umd',
    rollupOptions: {
      external: ['vue'],  // 配置外部依赖，不打包进输出的库中
      output: {
        exports: 'named', // 指定导出方式为命名导出（export const MyComponent = { }）
        globals: {
          vue: 'Vue',  // 如果使用 UMD/IIFE 构建方式，vue 这个外部模块对应的全局变量是 Vue
        }
      }
    }
  }
})
