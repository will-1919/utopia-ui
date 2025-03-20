import type { VNode } from 'vue'
import type { UtpTooltipProps } from '../UtpTooltip/types'

interface UtpDropdownProps extends UtpTooltipProps {
  menuOptions: MenuOptions[]
}
interface MenuOptions {
  label: string | VNode
  key: string | number
  disabled?: boolean
  divided?: boolean
}
interface UtpDropdownEmits {
  (e: 'visible-change', value: boolean): void
  (e: 'select', value: MenuOptions): void
}
interface UtpDropdownInstance {
  show: () => void
  hide: () => void
}

export type { UtpDropdownProps, MenuOptions, UtpDropdownEmits, UtpDropdownInstance }
