type switchValueType = boolean | string | number
interface UtpSwitchProps {
  modelValue: switchValueType
  activeValue?: switchValueType
  inActiveValue?: switchValueType
  disabled?: boolean
  activeText?: string
  inactiveText?: string
  name?: string
  id?: string
  size?: 'small' | 'big'
}
interface UtpSwitchEmits {
  (e: 'change', value: switchValueType): void
  (e: 'update:modelValue', value: switchValueType): void
}

export type { UtpSwitchProps, UtpSwitchEmits }
