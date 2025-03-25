<template>
  <div ref="messageRef" :style="cssStyle" v-show="visible" class="utp-message"
    :class="{ [`utp-message--${type}`]: type }" role="alert">
    <!-- 内容 -->
    <div class="utp-message__content">
      <slot>
        {{ offset }} - {{ topOffset }} - {{ height }} - {{ bottomOffset }}
        <render-vnode v-if="message" :v-node="message"></render-vnode>
      </slot>
    </div>
    <!-- 关闭图标 -->
    <div class="utp-message__close" v-if="showClose">
      <utp-icon @click.stop="closeHander" icon="xmark"></utp-icon>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { UtpMessageProps } from './types';
import RenderVnode from '../Common/RenderVnode';
import UtpIcon from '../UtpIcon/UtpIcon.vue';
import { computed, onMounted, ref, watch, nextTick } from 'vue';
import { getLastInstance, getLastBottomOffset } from './method'
import { bottom } from '@popperjs/core';

const props = withDefaults(defineProps<UtpMessageProps>(), { type: 'primary', duration: 3000, offset: 20 })
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
// 自动关闭计时器
const startTimer = () => {
  if (props.duration === 0) {
    return
  }
  setTimeout(() => {
    visible.value = false
  }, props.duration)
}
const closeHander = () => {
  visible.value = false
}
onMounted(() => {
  visible.value = true
  startTimer()
  nextTick(() => {
    height.value = messageRef.value!.getBoundingClientRect().height
  })
})
watch(visible, (newValue) => {
  if (newValue === false) {
    props.onDestory()
  }
})
defineExpose({
  bottomOffset,
  visible
})
</script>
<style>
.utp-message {
  width: max-content;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  border: 1px solid blue;
}
</style>
