import type { App } from 'vue'
import UtpInput from './UtpInput.vue'

UtpInput.install = (app: App) => {
  app.component(UtpInput.name as string, UtpInput)
}

export default UtpInput
export * from './types'
