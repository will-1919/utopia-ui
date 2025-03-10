import type { Ref, InjectionKey } from 'vue'

// CollapseItem的props属性
type NameType = string | number
interface CollapseItemProps {
  name: NameType
  title?: string
  disabled?: boolean
}
// 需要传给子组件的内容
interface CollapseContext {
  activeNames: Ref<NameType[]>
  handlerItemClick: (item: NameType) => void
}
// injectKey
const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')
// 父组件动态绑定
interface CollapseProps {
  modelValue: NameType[],
  accordion?: boolean
}
interface CollapseEmits {
  (e: 'update:modelValue', values: NameType[]) : void
  (e: 'change', values: NameType[]) : void
}

export type { NameType, CollapseItemProps, CollapseContext, CollapseProps, CollapseEmits }
export { collapseContextKey }
