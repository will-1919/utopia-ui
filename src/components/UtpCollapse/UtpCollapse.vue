<template>
  <div class="utp-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'
import type { NameType } from './types'
import { collapseContextKey } from './types'

// 当前展开状态数组
const activeNames = ref<NameType[]>([])
// 状态切换函数
const handlerItemClick = (item: NameType) => {
  const index = activeNames.value.indexOf(item)
  if (index > -1) {
    activeNames.value.splice(index, 1)
  } else {
    activeNames.value.push(item)
  }
}
// 传给子组件的属性
provide(collapseContextKey, {
  activeNames,
  handlerItemClick
})
</script>

<style></style>
