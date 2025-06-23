import type { App } from 'vue'
import UtpButton from './UtpButton.vue'

UtpButton.install = (app: App) => {
  app.component(UtpButton.name as string, UtpButton)
}

export default UtpButton
export * from './types'
