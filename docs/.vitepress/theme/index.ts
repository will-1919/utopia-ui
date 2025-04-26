import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import {
  AntDesignContainer,
  ElementPlusContainer,
  NaiveUIContainer,
} from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
// 组件样式入口
import '../../../src/styles/index.css'
import './custom.css'
// 图标入口
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, fab, far) // 添加图标到项目

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', NaiveUIContainer)
  },
}
