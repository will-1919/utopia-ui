<template>
  <form class="utp-form">
    <slot></slot>
    <button @click.prevent="validate">测试</button>
  </form>
</template>
<script setup lang="ts">
import { provide } from 'vue';
import type { UtpFormProps, FormItemContext, FormContext, FormValidateFailure, FormInstance } from './types';
import type { ValidateFieldsError } from 'async-validator'
import { formContextKey } from './types';

defineOptions({
  name: 'UtpForm'
})
const props = withDefaults(defineProps<UtpFormProps>(), {})
// FormItem数组
const fields: FormItemContext[] = []
const addField: FormContext['addField'] = (field) => {
  if (field.prop) {
    fields.push(field)
  }
}
const removeField: FormContext['removeField'] = (field) => {
  const fieldIndex = fields.indexOf(field)
  fields.splice(fieldIndex, 1)
}
// 给子组件传值
provide(formContextKey, {
  ...props,
  addField: addField,
  removeField: removeField
})
const validate = async () => {
  let validationErrors: ValidateFieldsError = {}
  // 循环运行fields中的测试validate函数，注意validate为返回值为promise, 这里可以使用Promise.allSettled
  for (const field of fields) {
    try {
      await field.validate('')
    } catch (e) {
      const error = e as FormValidateFailure
      validationErrors = {
        ...validationErrors,
        ...error.fields
      }
    }
  }
  if (Object.keys(validationErrors).length === 0) {
    return true
  }
  return Promise.reject(validationErrors)
}
defineExpose<FormInstance>({
  validate: validate
})
</script>
