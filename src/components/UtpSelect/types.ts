interface SelectOptions {
  lable: string // 选项名称
  value: string // 选项值
  disabled?: boolean
}
interface UtpSelectProps {
  modelValue: string // 当前选中的选项
  options: SelectOptions[] // 选项列表
  placeholder?: string
  disabled?: boolean
}
interface UtpSelectEmits {
  (e: 'change', value: string): void
  (e: 'update:modelValue', value: string): void
  (e: 'visible-change', value: boolean): void
}

export type { UtpSelectProps, UtpSelectEmits, SelectOptions }
