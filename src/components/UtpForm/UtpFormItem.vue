<template>
  <div class="utp-form-item" :class="{
    'is-error': validateStatus.state === 'error',
    'is-success': validateStatus.state === 'success',
    'is-loading': validateStatus.loading,
    'is-required': isRequired
  }">
    <label class="utp-form-item__label">
      <!-- 借助插槽传值 -->
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </label>
    <div class="utp-form-item__content">
      <slot :validate="validate"></slot>
      <div class="utp-form-item__error-msg" v-if="validateStatus.state === 'error'">
        {{ validateStatus.errorMsg }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { UtpFormItemProps, FormValidateFailure, FormItemContext, FormItemInstance, ValidateStatusProp } from './types';
import { computed, inject, reactive, provide, onMounted, onUnmounted } from 'vue';
import { formContextKey, formItemContextKey } from './types';
import { isNil } from 'lodash-es';
// RuleItem为async-validator预设的一些type
import Schema from 'async-validator';


defineOptions({
  name: 'UtpFormItem'
})
const props = withDefaults(defineProps<UtpFormItemProps>(), {})

// 获取全部父组件数据
const formContext = inject(formContextKey)
// 当前验证状态
const validateStatus = reactive<ValidateStatusProp>({
  state: 'init',
  errorMsg: '',
  loading: false
})
let initialValue: any = null
// 筛选出和当前表单项目所对应的数据
const innerValue = computed(() => {
  const model = formContext?.model
  if (model && props.prop && !isNil(model[props.prop])) {
    return model[props.prop]
  } else {
    return null
  }
})
// 筛选出和当前表单项目所对应的规则
const itemRules = computed(() => {
  const rules = formContext?.rules
  if (rules && props.prop && !isNil(rules[props.prop])) {
    return rules[props.prop]
  } else {
    return []
  }
})
// 是否是必须项
const isRequired = computed(() => {
  return itemRules.value.some((rule) => {
    return rule.required
  })
})
// 筛选出对应的规则
const getTriggeredRules = (trigger?: string) => {
  const rules = itemRules.value
  if (rules) {
    return rules.filter((rule) => {
      if (!rule.trigger || !trigger) {
        return true
      }
      return rule.trigger && rule.trigger === trigger
    })
  } else {
    return []
  }
}
// 验证方法
const validate = async (trigger?: string) => {
  const modelName = props.prop
  const triggeredRules = getTriggeredRules(trigger)
  if (triggeredRules?.length === 0) {
    return true
  }
  if (modelName) {
    // 创建验证实例
    const validator = new Schema({
      [modelName]: triggeredRules
    })
    validateStatus.loading = true
    return validator.validate({ [modelName]: innerValue.value }).then(() => {
      validateStatus.state = 'success'
    }).catch((e: FormValidateFailure) => {
      const { errors } = e
      validateStatus.state = 'error'
      validateStatus.errorMsg = (errors && (errors.length > 0)) ? errors[0].message || '' : ''
      // console.log('error', e.errors)
      return Promise.reject(e)
    }).finally(() => {
      validateStatus.loading = false
    })
  }
}
// 清除验证输出
const clearValidta = () => {
  validateStatus.state = 'init'
  validateStatus.errorMsg = ''
  validateStatus.loading = false
}
// 恢复表单原始的值
const resetField = () => {
  clearValidta()
  const model = formContext?.model
  if (model && props.prop && !isNil(model[props.prop])) {
    model[props.prop] = initialValue
  }
}
const context: FormItemContext = {
  prop: props.prop || '',
  validate: validate,
  clearValidta: clearValidta,
  resetField: resetField
}
provide(formItemContextKey, context)
onMounted(() => {
  if (props.prop) {
    formContext?.addField(context)
    initialValue = innerValue.value
  }
})
onUnmounted(() => {
  formContext?.removeField(context)
})
defineExpose<FormItemInstance>({
  validateStatus: validateStatus,
  validate: validate,
  resetField: resetField,
  clearValidta: clearValidta,
})
</script>
