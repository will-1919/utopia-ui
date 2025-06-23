import type { App } from 'vue'
import UtpSwitch from './UtpSwitch.vue'

UtpSwitch.install = (app: App) => {
  app.component(UtpSwitch.name as string, UtpSwitch)
}

export default UtpSwitch
export * from './types'
