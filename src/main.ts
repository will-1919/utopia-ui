import './styles/index.css'
// icon图标相关
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas) // 添加图标到项目

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
