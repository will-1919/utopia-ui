<template>
  <Transition :name="transitionName" @after-leave="destoryComponent" @enter="updateHeight">
    <div @mouseenter="clearTimer" @mouseleave="startTimer" ref="messageRef" :style="cssStyle" v-show="visible"
      class="utp-message" :class="{ [`utp-message--${type}`]: type, 'is-close': showClose }" role="alert">
      <!-- 内容 -->
      <div class="utp-message__content">
        <slot>
          <render-vnode v-if="message" :v-node="message"></render-vnode>
        </slot>
      </div>
      <!-- 关闭图标 -->
      <div class="utp-message__close" v-if="showClose">
        <utp-icon @click.stop="closeHander" icon="xmark"></utp-icon>
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import type { UtpMessageProps } from './types';
import RenderVnode from '../Common/RenderVnode';
import UtpIcon from '../UtpIcon/UtpIcon.vue';
import { computed, onMounted, ref, watch, nextTick } from 'vue';
import { getLastBottomOffset } from './method'
import useEventListener from '@/hooks/useEventListener';

defineOptions({
  name: 'UtpMessage'
})
const props = withDefaults(defineProps<UtpMessageProps>(), {
  type: 'primary',
  duration: 3000,
  offset: 20,
  transitionName: 'fade-up'
})
// 组件定位相关逻辑------------------------------------------------------------------------------
const messageRef = ref<HTMLDivElement>()
// 当前消息组件自身高度
const height = ref<number>(0)
// 上一个组件最下方坐标，第一个为0
const lastOffset = computed(() => {
  return getLastBottomOffset(props.id)
})
// 当前消息组件定位top
const topOffset = computed(() => {
  return lastOffset.value + props.offset
})
// 为下一个元素预留当前最底部的bottom值
const bottomOffset = computed(() => {
  return topOffset.value + height.value
})
// 当前消息组件定位top动态样式
const cssStyle = computed(() => {
  return {
    top: topOffset.value + 'px',
    zIndex: props.zIndex
  }
})
// 组件打开关闭相关逻辑---------------------------------------------------------------------------
const visible = ref<boolean>(false)
let timer: any
// 自动关闭计时器
const startTimer = () => {
  if (props.duration === 0) {
    return
  }
  timer = setTimeout(() => {
    visible.value = false
  }, props.duration)
}
// 暂停计时器
const clearTimer = () => {
  clearTimeout(timer)
}
const closeHander = () => {
  visible.value = false
}
onMounted(() => {
  visible.value = true
  startTimer()
})
const keydown = (e: Event) => {
  const event = e as KeyboardEvent
  if (event.code === 'Escape') {
    visible.value = false
  }
}
useEventListener(document, 'keydown', keydown)
// 在元素被插入到 DOM 之后的下一帧更新height的值
const updateHeight = () => {
  height.value = messageRef.value!.getBoundingClientRect().height
}
// 在离开过渡完成、且元素已从 DOM 中移除时移除组件
const destoryComponent = () => {
  props.onDestory()
}
defineExpose({
  bottomOffset,
  visible
})
</script>
<style></style>
