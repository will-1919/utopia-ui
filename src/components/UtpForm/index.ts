import type { App } from 'vue'
import UtpForm from './UtpForm.vue'
import UtpFormItem from './UtpFormItem.vue'

UtpForm.install = (app: App) => {
  app.component(UtpForm.name as string, UtpForm)
}
UtpFormItem.install = (app: App) => {
  app.component(UtpFormItem.name as string, UtpFormItem)
}

export default UtpForm
export { UtpFormItem }
export * from './types'
