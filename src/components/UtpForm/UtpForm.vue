<template>
  <form class="utp-form">
    <slot></slot>
  </form>
</template>
<script setup lang="ts">
import { provide } from 'vue';
import type { UtpFormProps } from './types';
import { formContextKey } from './types';

defineOptions({
  name: 'UtpForm'
})
const props = withDefaults(defineProps<UtpFormProps>(), {})
// 给子组件传值
provide(formContextKey, props)
</script>
