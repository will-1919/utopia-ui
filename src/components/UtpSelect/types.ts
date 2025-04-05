import type { VNode } from "vue"

interface SelectOptions {
  label: string // 选项名称
  value: string | number // 选项值
  disabled?: boolean
}
type RenderLabelFunc = (option: SelectOptions) => VNode
type CustomFilterFunc = (value: string) => SelectOptions[]
type CustomFilterRemote = (value: string) => Promise<SelectOptions[]>
interface UtpSelectProps {
  modelValue: string | number // 当前选中的选项
  options?: SelectOptions[] // 选项列表
  placeholder?: string
  disabled?: boolean
  clearable?: boolean,
  renderLabel?: RenderLabelFunc
  filterable?: boolean
  filterMethod?: CustomFilterFunc
  remote?:boolean
  remoteMethod?: CustomFilterRemote
}
interface UtpSelectEmits {
  (e: 'change', value: string | number): void
  (e: 'update:modelValue', value: string | number): void
  (e: 'visible-change', value: boolean): void
  (e: 'clear'): void
}
interface SelectStates {
  inputValue: string
  selectOption: null | SelectOptions
  mouseHover: boolean
  loading: boolean
}

export type { UtpSelectProps, UtpSelectEmits, SelectOptions, SelectStates }
