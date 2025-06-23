import type { App } from "vue";
import UtpDropdown from './UtpDropdown.vue'

UtpDropdown.install = (app: App) => {
  app.component(UtpDropdown.name as string, UtpDropdown)
}

export default UtpDropdown
export * from './types'
