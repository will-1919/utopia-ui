import type { App } from 'vue'
import UtpTooltip from './UtpTooltip.vue'

UtpTooltip.install = (app: App) => {
  app.component(UtpTooltip.name as string, UtpTooltip)
}

export default UtpTooltip
export * from './types'
