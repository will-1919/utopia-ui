<template>
  <div :class="{ 'is-disabled': disabled }">
    <div :class="{ 'is-disabled': disabled, 'is-active': isActive }" :id="`item-header-${name}`"
      class="utp-collapse-item__header" @click="handlerClick">
      <slot name="title">
        <!-- 当不传插槽则默认title, 传入时覆盖title -->
        {{ title }}
      </slot>
      <utp-icon icon="angle-right" class="header-angle"></utp-icon>
    </div>
    <Transition v-on="transitionEvents" name="slide">
      <div class="utp-collapse-item__wrapper" v-show="isActive">
        <div :id="`item-content-${name}`" class="utp-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
// import type {  } from './types.ts'
import type { CollapseItemProps } from './types'
import { collapseContextKey } from './types'
import { inject, computed } from 'vue'
import UtpIcon from '../UtpIcon/UtpIcon.vue'

defineOptions({
  name: 'UtpCollapseItem'
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
// 动画
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  }
}
</script>

<style></style>
