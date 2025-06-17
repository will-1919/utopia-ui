import type { InjectionKey } from 'vue'
import type { RuleItem, ValidateError, ValidateFieldsError } from 'async-validator'

// FormItem属性
interface UtpFormItemProps {
  label: string
  prop?: string
}

// FormItemRule 扩展后的验证规则
interface FormItemRule extends RuleItem {
  trigger?: string
}
// Form验证规则
type FormRules = Record<string, FormItemRule[]>
// UtpForm属性
interface UtpFormProps {
  model: Record<string, any>
  rules?: FormRules
}
// 验证状态
interface ValidateStatusProp {
  state: 'init' | 'success' | 'error'
  errorMsg: string
  loading: boolean
}
// form传递给formItem的context
interface FormContext extends UtpFormProps {
  addField: (field: FormItemContext) => void
  removeField: (field: FormItemContext) => void
}
// item传给form的context
interface FormItemContext {
  prop: string
  validate: (tigger?: string) => Promise<any>
  resetField: () => void
  clearValidta: () => void
}
// 声明错误类型
interface FormValidateFailure {
  errors: ValidateError[] | null
  fields: ValidateFieldsError
}
// form的实例方法
interface FormInstance {
  validate: () => Promise<any>
  resetFields: () => void
  clearValidta: () => void
}
// formItem的实例方法
interface FormItemInstance {
  validateStatus: ValidateStatusProp
  validate: (tigger?: string) => Promise<any>
  resetField: () => void
  clearValidta: () => void
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
  ValidateStatusProp,
  FormItemInstance,
}
export { formContextKey, formItemContextKey }
