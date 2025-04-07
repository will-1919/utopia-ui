<template>
  <div class="utp-form-item">
    <label class="utp-form-item__label">
      <!-- 借助插槽传值 -->
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </label>
    <div class="utp-form-item__content">
      <slot></slot>
    </div>
    {{ innerValue }} : {{ itemRules }}
  </div>
</template>
<script setup lang="ts">
import type { UtpFormItemProps } from './types';
import { computed, inject, onMounted } from 'vue';
import { formContextKey } from './types';
import { isNil } from 'lodash-es';

defineOptions({
  name: 'UtpFormItem'
})
const props = withDefaults(defineProps<UtpFormItemProps>(), {})

// 获取全部父组件数据
const formContext = inject(formContextKey)
onMounted(() => {

})
// 筛选出和当前表单项目所对应的数据
const innerValue = computed(() => {
  const model = formContext?.model
  if (model && props.prop && !isNil(model[props.prop])) {
    return model[props.prop]
  } else {
    return null
  }
})
const itemRules = computed(() => {
  const rules = formContext?.rules
  if (rules && props.prop && !isNil(rules[props.prop])) {
    return rules[props.prop]
  } else {
    return []
  }
})

</script>
