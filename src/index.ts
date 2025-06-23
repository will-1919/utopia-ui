import type { App } from 'vue'
import UtpButton from '@/components/UtpButton'
import UtpCollapse, { UtpCollapseItem } from '@/components/UtpCollapse'
import UtpDropdown from '@/components/UtpDropdown'
import UtpForm, { UtpFormItem } from '@/components/UtpForm'
import UtpIcon from '@/components/UtpIcon'
import UtpInput from '@/components/UtpInput'
import UtpMessage, { createMessage, closeAll as closeMessageAll } from '@/components/UtpMessage'
import UtpSelect from '@/components/UtpSelect'
import UtpSwitch from '@/components/UtpSwitch'
import UtpTooltip from '@/components/UtpTooltip'

const components = [
  UtpButton,
  UtpCollapse,
  UtpCollapseItem,
  UtpDropdown,
  UtpForm,
  UtpFormItem,
  UtpIcon,
  UtpInput,
  UtpMessage,
  UtpSelect,
  UtpSwitch,
  UtpTooltip,
]
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name as string, component)
  })
}

export {
  install,
  UtpButton,
  UtpCollapse,
  UtpCollapseItem,
  UtpDropdown,
  UtpForm,
  UtpFormItem,
  UtpIcon,
  UtpInput,
  UtpMessage,
  createMessage,
  closeMessageAll,
  UtpSelect,
  UtpSwitch,
  UtpTooltip,
}
export default {
  install,
}
