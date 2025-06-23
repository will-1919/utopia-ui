import type { App } from 'vue'
import UtpSelect from './UtpSelect.vue'

UtpSelect.install = (app: App) => {
  app.component(UtpSelect.name as string, UtpSelect)
}

export default UtpSelect
export * from './types'
