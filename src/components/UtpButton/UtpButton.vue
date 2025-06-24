<template>
  <button @click="utpClick" ref="_ref" class="utp-button" :class="{
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled,
    'is-loading': loading,
    [`utp-button--${type}`]: type,
    [`utp-button--${size}`]: size,
  }" :disabled="disabled || loading" :autofocus="autofocus" :type="nativeType">
    <utp-icon icon="spinner" spin v-if="loading"></utp-icon>
    <utp-icon :icon="icon" v-if="icon"></utp-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import UtpIcon from '../UtpIcon/UtpIcon.vue'
import type { ButtonProps } from './types'

defineOptions({
  name: 'UtpButton',
})

withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  nativeType: 'button',
  size: 'middle',
  plain: false,
  round: false,
  circle: false,
  disabled: false,
  autofocus: false,
  icon: '',
  loading: false
}) // 声明按钮的一系列属性变量
// 优化事件
const emit = defineEmits(['click'])
const utpClick = () => {
  emit('click')
}

// 对外暴露dom节点
const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref,
})
</script>

<style></style>
