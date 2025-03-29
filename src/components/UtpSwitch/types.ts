interface UtpSwitchProps {
  modelValue: boolean
  disabled?: boolean
  activeText?: string
  inactiveText?: string
  name?: string
  id?: string
  size?: 'small' | 'big'
}
interface UtpSwitchEmits {
  (e: 'change', value: boolean): void
  (e: 'update:modelValue', value: boolean): void
}

export type { UtpSwitchProps, UtpSwitchEmits }
