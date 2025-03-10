<template>
  <div :class="{ 'is-disabled': disabled }">
    <div :id="`item-header-${name}`" class="utp-collapse-item__header" @click="handlerClick">
      <slot name="title">
        <!-- 当不传插槽则默认title, 传入时覆盖title -->
        {{ title }}
      </slot>
    </div>
    <div :id="`item-content-${name}`" class="utp-collapse-item__content" v-show="isActive">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import type {  } from './types.ts'
import type { CollapseItemProps } from './types'
import { collapseContextKey } from './types'
import { inject, computed } from 'vue'

defineOptions({
  name: 'utp-collapse-item'
})
// 组件属性
const props = defineProps<CollapseItemProps>()
// 父组件传过来的属性
const collapseContext = inject(collapseContextKey);
// 判断当前组件是否展开
const isActive = computed(() => {
  return collapseContext?.activeNames.value.includes(props.name)
})
const handlerClick = () => {
  if (props.disabled) {
    return
  }
  collapseContext?.handlerItemClick(props.name);
}
</script>

<style>
.utp-collapse-item__header {
  color: red;
}
</style>
