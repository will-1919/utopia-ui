import type { InjectionKey } from 'vue'
import type { RuleItem, ValidateError, ValidateFieldsError } from 'async-validator'

interface UtpFormItemProps {
  label: string
  prop?: string
}
interface FormItemRule extends RuleItem {
  trigger?: string
}
type FormRules = Record<string, FormItemRule[]>
interface UtpFormProps {
  model: Record<string, any>
  rules: FormRules
}
// form传递给formItem的context
interface FormContext extends UtpFormProps {
  addField: (field: FormItemContext) => void
  removeField: (field: FormItemContext) => void
}
// item传给form的context
interface FormItemContext {
  validate: (tigger?: string) => any
  prop: string
}
// 声明错误类型
interface FormValidateFailure {
  errors: ValidateError[] | null
  fields: ValidateFieldsError
}
// form的实例方法
interface FormInstance {
  validate: () => Promise<any>
}
// provide传递数据的key
const formContextKey: InjectionKey<FormContext> = Symbol('formContextKey')
const formItemContextKey: InjectionKey<FormItemContext> = Symbol('formItemContextKey')

export type {
  UtpFormItemProps,
  UtpFormProps,
  FormContext,
  FormItemContext,
  FormValidateFailure,
  FormItemRule,
  FormInstance,
}
export { formContextKey, formItemContextKey }
