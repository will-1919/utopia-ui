import type { App } from 'vue'
import UtpCollapse from './UtpCollapse.vue'
import UtpCollapseItem from './UtpCollapseItem.vue'

UtpCollapse.install = (app: App) => {
  app.component(UtpCollapse.name as string, UtpCollapse)
}
UtpCollapseItem.install = (app: App) => {
  app.component(UtpCollapseItem.name as string, UtpCollapseItem)
}

export default UtpCollapse
export { UtpCollapseItem }
export * from './types'
