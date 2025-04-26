import './styles/index.css'
// icon图标相关
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, fas, far) // 添加图标到项目

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
