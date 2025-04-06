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
  </div>
</template>
<script setup lang="ts">
import type { UtpFormItemProps } from './types';

defineOptions({
  name: 'UtpFormItem'
})
const props = withDefaults(defineProps<UtpFormItemProps>(), {})

</script>
