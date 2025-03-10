<template>
  <div class="utp-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'
import type { NameType, CollapseProps, CollapseEmits } from './types'
import { collapseContextKey } from './types'

// 动态v-module
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
// 当前展开状态数组
const activeNames = ref<NameType[]>(props.modelValue)
// 状态切换函数
const handlerItemClick = (item: NameType) => {
  // 手风琴模式逻辑
  if (props.accordion) {
    activeNames.value = [activeNames.value[0] === item ? '' : item]
  } else {
    const index = activeNames.value.indexOf(item)
    if (index > -1) {
      activeNames.value.splice(index, 1)
    } else {
      activeNames.value.push(item)
    }
  }
  emits('update:modelValue', activeNames.value)
  emits('change', activeNames.value)
}
// 传给子组件的属性
provide(collapseContextKey, {
  activeNames,
  handlerItemClick
})
</script>

<style></style>
