<template>
  <div class="utp-input" :class="{
    [`utp-input--${type}`]: type,
    [`utp-input--${size}`]: size,
    'is-disabled': disabled,
    'is-prepend': $slots.prepend,
    'is-append': $slots.append,
    'is-prefix': $slots.prefix,
    'is-suffix': $slots.suffix,
    'is-focus': isFocus
  }">
    <!-- input节点 -->
    <template v-if="type !== 'textarea'">
      <!-- 前置内容， prepend插槽 -->
      <div v-if="$slots.prepend" class="utp-input__prepend max-content">
        <slot name="prepend"></slot>
      </div>
      <!-- input主体 -->
      <div class="utp-input__wrapper max-content">
        <!-- prefix插槽 -->
        <span v-if="$slots.prefix" class="utp-input__prefix">
          <slot name="prefix"></slot>
        </span>
        <input ref="inputRef" @change="handlerChange" @focus="handleFocus" @blur="handleBlur" @input="handlerInput"
          v-model="innerValue" class="utp-input__inner"
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type" :disabled="disabled"
          :placeholder="placeholder" :readonly="readonly" :autocomplete="autocomplete" :autofocus="autofocus"
          :form="form" v-bind="attrs">
        <!-- suffix插槽 -->
        <span v-if="$slots.suffix || showClear || showPasswordArea" class="utp-input__suffix" @click="keepFocus">
          <slot name="suffix"></slot>
          <utp-icon @click="clear" @mousedown.prevent="() => {}" icon="circle-xmark" v-if="showClear" class="utp-input__clear"></utp-icon>
          <utp-icon @click="togglePasswordVisible" icon="eye" v-if="showPasswordArea && passwordVisible"
            class="utp-input__password"></utp-icon>
          <utp-icon @click="togglePasswordVisible" icon="eye-slash" v-if="showPasswordArea && !passwordVisible"
            class="utp-input__password"></utp-icon>
        </span>
      </div>
      <!-- 后置内容， append插槽 -->
      <div v-if="$slots.append" class="utp-input__append max-content">
        <slot name="append"></slot>
      </div>
    </template>
    <!-- textarea节点 -->
    <template v-else>
      <textarea ref="inputRef" @change="handlerChange" @focus="handleFocus" @blur="handleBlur" @input="handlerInput"
        v-model="innerValue" class="utp-textarea__wrapper" :disabled="disabled" :placeholder="placeholder"
        :readonly="readonly" :autocomplete="autocomplete" :autofocus="autofocus" :form="form" v-bind="attrs"></textarea>
    </template>
  </div>
</template>
<script setup lang="ts">
import type { UtpInputProps, UtpInputEmits } from './types';
import { computed, nextTick, ref, useAttrs, watch } from 'vue';
import UtpIcon from '../UtpIcon/UtpIcon.vue';
import type { Ref } from 'vue';

defineOptions({
  name: 'UtpInput',
  inheritAttrs: false
})
// props属性
const props = withDefaults(defineProps<UtpInputProps>(), {
  type: 'text',
  autocomplete: 'off'
})
const attrs = useAttrs()
const emits = defineEmits<UtpInputEmits>()
// input双向绑定值
const innerValue = ref(props.modelValue)
// 是不是聚焦状态
const isFocus = ref<boolean>(false)
// 是否显示清空图标
const showClear = computed(() => {
  return props.clearable && !props.disabled && !!innerValue.value && isFocus.value
})
// 更新绑定的双向值
const handlerInput = () => {
  emits('update:modelValue', innerValue.value)
  emits('input', innerValue.value)
}
// 聚焦回调函数
const handleFocus = (event: FocusEvent) => {
  isFocus.value = true
  emits('focus', event)
}
// 失去焦点回调函数
const handleBlur = (event: FocusEvent) => {
  isFocus.value = false
  emits('blur', event)
}
// 清空input的值
const clear = () => {
  innerValue.value = ''
  emits('update:modelValue', '')
  emits('clear')
  emits('input', '')
  emits('change', '')
}
// 控制密码是否显示
const passwordVisible = ref<boolean>(false)
// 显示密码区域是否展示
const showPasswordArea = computed(() => {
  return props.showPassword && !props.disabled && !!innerValue.value
})
// 点击切换密码是否展示
const togglePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
}
// 点击图标的时候保持focus
const keepFocus = () => {
  nextTick(() => {
    inputRef.value?.focus()
  })
}
// 支持一些原生的事件
// change事件
const handlerChange = () => {
  emits('change', innerValue.value)
}
watch(() => props.modelValue, (newValue) => {
  innerValue.value = newValue
})
const inputRef = ref<HTMLInputElement>()
defineExpose({
  ref: inputRef
})
</script>
