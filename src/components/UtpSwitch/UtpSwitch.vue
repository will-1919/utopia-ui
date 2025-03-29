<template>
  <div @click="switchValue" class="utp-switch" :class="{
    [`utp-size--${size}`]: size,
    'is-disabled': disabled,
    'is-checked': checked

  }">
    <!-- 逻辑节点 -->
    <input class="utp-switch__input" type="checkbox" role="switch" :name="name" :disabled="disabled">
    <!-- 展示节点 -->
    <div class="utp-switch__core">
      <div class="utp-switch__core-action"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import type { UtpSwitchProps, UtpSwitchEmits } from './types';
defineOptions({
  name: 'UtpSwitch',
  inheritAttrs: false
})
const props = withDefaults(defineProps<UtpSwitchProps>(), {

})
const emits = defineEmits<UtpSwitchEmits>()
// 开关是否激活
const innerValue = ref(props.modelValue)
const checked = computed(() => {
  return innerValue.value
})
const switchValue = () => {
  if (props.disabled) { return }
  innerValue.value = !checked.value
  emits('update:modelValue', innerValue.value)
  emits('change', innerValue.value)
}
</script>
