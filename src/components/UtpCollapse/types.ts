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

export type { NameType, CollapseItemProps, CollapseContext }
export { collapseContextKey }
