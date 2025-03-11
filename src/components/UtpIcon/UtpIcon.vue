<template>
  <i class="utp-icon" :class="{ [`utp-icon--${type}`]: type }" :style="customStyles">
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { UtpIconProps } from './types.ts'
import { omit } from 'lodash-es'
import { computed } from 'vue';

defineOptions({
  name: 'utp-icon',
  inheritAttrs: false,  // 停止props属性透传到跟组件
})
const props = defineProps<UtpIconProps>()
const filterProps = omit(props, ['type', 'color'])
const customStyles = computed(() => {
  if (props.color) {
    return { color: props.color }
  } else {
    return {}
  }
})
</script>
