import type { InjectionKey } from 'vue'

interface UtpFormItemProps {
  label: string
  prop?: string
}
interface UtpFormProps {
  model: Record<string, any>
  rules: Record<string, any>
}
// form传递给formItem的context
interface FormContext extends UtpFormProps {}
// provide传递数据的key
const formContextKey: InjectionKey<FormContext> = Symbol('formContextKey')

export type { UtpFormItemProps, UtpFormProps, FormContext }
export { formContextKey }
