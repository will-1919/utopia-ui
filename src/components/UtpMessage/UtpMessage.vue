<template>
  <div v-show="visible" class="utp-message" :class="{ [`utp-message--${type}`]: type }" role="alert">
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
</template>
<script setup lang="ts">
import type { UtpMessageProps } from './types';
import RenderVnode from '../Common/RenderVnode';
import UtpIcon from '../UtpIcon/UtpIcon.vue';
import { onMounted, ref, watch } from 'vue';
import { getLastInstance } from './method'

const props = withDefaults(defineProps<UtpMessageProps>(), { type: 'primary', duration: 3000 })
const visible = ref<boolean>(false)
const preInstance = getLastInstance()
console.log('能否拿到最后一个', preInstance)
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
})
watch(visible, (newValue) => {
  if (newValue === false) {
    props.onDestory()
  }
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
