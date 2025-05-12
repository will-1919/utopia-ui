<template>
  <div @click="switchValue" class="utp-switch" :class="{
    [`utp-switch--${size}`]: size,
    'is-disabled': disabled,
    'is-checked': checked

  }">
    <!-- 逻辑节点 -->
    <input ref="input" @keydown.enter="switchValue" class="utp-switch__input" type="checkbox" role="switch" :name="name"
      :disabled="disabled">
    <!-- 展示节点 -->
    <div class="utp-switch__core">
      <!--按钮文字  -->
      <div class="utp-switch__core-inner">
        <span v-if="activeText || inactiveText" class="utp-switch__core-inner-text">
          {{ checked ? activeText : inactiveText }}
        </span>
      </div>
      <!-- 按钮圆点 -->
      <div class="utp-switch__core-action"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import type { UtpSwitchProps, UtpSwitchEmits } from './types';
defineOptions({
  name: 'UtpSwitch',
})
const props = withDefaults(defineProps<UtpSwitchProps>(), {
  activeValue: true,
  inActiveValue: false
})
const emits = defineEmits<UtpSwitchEmits>()
// 开关是否激活
const innerValue = ref(props.modelValue)
const checked = computed(() => {
  return innerValue.value === props.activeValue
})
// 获取checkbox的ref
const input = ref<HTMLInputElement>()
const switchValue = () => {
  if (props.disabled) { return }
  const newValue = checked.value ? props.inActiveValue : props.activeValue
  console.log('触发了', newValue)
  innerValue.value = newValue
  emits('update:modelValue', newValue)
  emits('change', newValue)
}
onMounted(() => {
  input.value!.checked = checked.value
})
watch(checked, (newValue) => {
  input.value!.checked = newValue
})
watch(() => props.modelValue, (newValue) => {
  innerValue.value = newValue
})
</script>
