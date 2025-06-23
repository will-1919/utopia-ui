import type { App } from 'vue'
import UtpIcon from './/UtpIcon.vue'

UtpIcon.install = (app: App) => {
  app.component(UtpIcon.name as string, UtpIcon)
}

export default UtpIcon
export * from './types'
