<template>
  <div :class="{ 'is-disabled': disabled }">
    <div :id="`item-header-${name}`" class="utp-collapse-item__header">
      <slot name="title">
        <!-- 当不传插槽则默认title, 传入时覆盖title -->
        {{ title }}
      </slot>
    </div>
    <div :id="`item-content-${name}`" class="utp-collapse-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import type {  } from './types.ts'
import type { CollapseItemProps } from './types'

defineOptions({
  name: 'utp-collapse-item'
})
// defineProps<CollapseItemProps>() // 使用泛型声明
defineProps<CollapseItemProps>()

</script>

<style></style>
