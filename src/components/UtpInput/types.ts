interface UtpInputProps {
  modelValue: string
  type: string
  size?: 'big' | 'small'
  disabled?: boolean
  clearable?: boolean
  showPassword?: boolean
  placeholder?: string
  readonly?: boolean
  autocomplete?: string
  autofocus?: boolean
  form?: string
}
interface UtpInputEmits {
  (e: 'update:modelValue', value: string): void
  (e: 'input', value: string): void
  // 修改了值并且失去焦点时触发
  (e: 'change', value: string): void
  (e: 'focus', value: FocusEvent): void
  (e: 'blur', value: FocusEvent): void
  (e: 'clear'): void
}

export type { UtpInputProps, UtpInputEmits }
