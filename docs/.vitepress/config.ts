import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin' // 配置组件demo展示组件

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Utopia Ui',
  description: 'How to use Utopia Ui',
  // srcDir: 'components', // 配置存放markdown文件并生成对应路由的文件夹
  base: './',
  themeConfig: {
    // 导航标题位置
    siteTitle: false,
    logo: '/title-logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '安装', link: '/get-started' },
      { text: '组件', link: '/components/utp-button', activeMatch: '/components/' },
    ],

    sidebar: [
      {
        text: 'General 泛用组件',
        items: [
          {text: 'Button 按钮', link: '/components/utp-button' },
          {text: 'Icon 图标', link: '/components/utp-icon' },
          {text: 'Message 消息', link: '/components/utp-message' },
        ],
      },
      {
        text: 'layout 布局组件',
        items: [
          { text: 'Collapse 抽屉', link: '/components/utp-collapse' },
          { text: 'Tooltip 文本提示', link: '/components/utp-tooltip' },
          { text: 'Dropdown 下拉菜单', link: '/components/utp-dropdown' }
        ],
      },
      {
        text: 'Data Entry 数据录入组件',
        items: [
          { text: 'Select 选择器', link: '/components/utp-select' },
          { text: 'Switch 开关', link: '/components/utp-switch' },
          { text: 'Input 输入框', link: '/components/utp-input' },
          { text: 'Form 表单', link: '/components/utp-form' }
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/Will1148683448/utopia-ui' }],
  },
  vite: {
    resolve:{
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
})
