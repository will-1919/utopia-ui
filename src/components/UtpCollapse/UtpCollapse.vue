<template>
  <div class="utp-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide, watch } from 'vue'
import type { NameType, CollapseProps, CollapseEmits } from './types'
import { collapseContextKey } from './types'

defineOptions({
  name: 'UtpCollapse'
})
// 动态v-module
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
// 当前展开状态数组
const activeNames = ref<NameType[]>(props.modelValue)
watch(() => props.modelValue, () => {
  activeNames.value = props.modelValue
})
// 状态切换函数
const handlerItemClick = (item: NameType) => {
  // 创建响应式对象activeNames的原始数组，防止操作后@change函数返回值为响应式对象，从而导致错误
  let _activeNames = [...activeNames.value]
  // 手风琴模式逻辑
  if (props.accordion) {
    _activeNames = [activeNames.value[0] === item ? '' : item]  // 修改复制数组
    activeNames.value = _activeNames // 修改响应式对象
  } else {
    const index = _activeNames.indexOf(item)
    if (index > -1) {
      _activeNames.splice(index, 1)
    } else {
      _activeNames.push(item)
    }
    activeNames.value = _activeNames // 修改响应式对象
  }
  emits('update:modelValue', _activeNames)
  emits('change', _activeNames)
}
// 传给子组件的属性
provide(collapseContextKey, {
  activeNames,
  handlerItemClick
})
</script>

<style></style>
