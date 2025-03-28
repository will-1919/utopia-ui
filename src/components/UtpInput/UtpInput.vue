<template>
  <div class="utp-input" :class="{
    [`utp-input--${type}`]: type,
    [`utp-input--${size}`]: size,
    'is-disabled': disabled,
    'is-prepend': $slots.prepend,
    'is-append': $slots.append,
    'is-prefix': $slots.prefix,
    'is-suffix': $slots.suffix
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
        <input class="utp-input__inner" :type="type" :disabled="disabled">
        <!-- suffix插槽 -->
        <span v-if="$slots.suffix" class="utp-input__suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
      <!-- 后置内容， append插槽 -->
      <div v-if="$slots.append" class="utp-input__append max-content">
        <slot name="append"></slot>
      </div>
    </template>
    <!-- textarea节点 -->
    <template v-else>
      <textarea class="utp-textarea__wrapper" :disabled="disabled"></textarea>
    </template>
  </div>
</template>
<script setup lang="ts">
import { text } from '@fortawesome/fontawesome-svg-core';
import type { UtpInputProps } from './types';

defineOptions({
  name: 'UtpInput'
})
const props = withDefaults(defineProps<UtpInputProps>(), {
  type: 'text'
})
</script>
