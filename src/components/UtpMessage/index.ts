import type { App } from 'vue'
import UtpMessage from './UtpMessage.vue'
import { createMessage, closeAll } from './method'

UtpMessage.install = (app:App) => {
  app.component(UtpMessage.name as string, UtpMessage)
}

export default UtpMessage
export {createMessage, closeAll}
export * from './types'
