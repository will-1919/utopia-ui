<template>
  <form class="utp-form">
    <slot></slot>
  </form>
</template>
<script setup lang="ts">
import type { UtpFormProps } from './types';

defineOptions({
  name: 'UtpForm'
})
const props = withDefaults(defineProps<UtpFormProps>(), {})
</script>
