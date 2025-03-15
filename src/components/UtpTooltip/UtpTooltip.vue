<template>
  <div ref="popperContentNode" v-on="outerEvents" class="utp-tooltip">
    <!-- 触发部分 -->
    <div v-on="events" ref="tirggerNode" class="utp-tooltip__tirgger">
      <slot></slot>
    </div>
    <!-- 展示部分 -->
    <div ref="popperNode" v-if="isOpen" class="utp-tooltip__popper">
      <slot name="content">
        {{ content }}
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, reactive } from 'vue';
import type { UtpTooltipProps, UtpTooltipEmits } from './types';
import { createPopper } from '@popperjs/core';
import type { Instance } from '@popperjs/core';
import useClickOutside from '@/hooks/useClickOutside';

const props = withDefaults(defineProps<UtpTooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover'
})
// 当前事件变量
let events: Record<string, any> = reactive({})
let outerEvents: Record<string, any> = reactive({})
const emits = defineEmits<UtpTooltipEmits>()
const isOpen = ref(false)
const tirggerNode = ref<HTMLElement | null>(null)
const popperNode = ref<HTMLElement | null>(null);
const popperContentNode = ref<HTMLElement | undefined>();
let popperInstance: null | Instance = null
// 点击事件的回调函数
const togglePopper = () => {
  isOpen.value = !isOpen.value
  emits('visible-change', isOpen.value)
}
// hover事件进入的回调函数
const open = () => {
  isOpen.value = true
  emits('visible-change', isOpen.value)
}
// hover事件划出的回调函数
const close = () => {
  isOpen.value = false
  emits('visible-change', isOpen.value)
}
// 添加事件韩式
const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = open
    outerEvents['mouseleave'] = close
  } else if (props.trigger === 'click') {
    events['click'] = togglePopper
  }
}
// 执行添加事件
attachEvents()
// 执行useClickOutside函数
useClickOutside(popperContentNode, () => {
  if(props.trigger === 'click' && isOpen.value) {
    close()
  }
})
// 监听事件改变
watch(() => props.trigger, (newValue, oldValue) => {
  if (newValue != oldValue) {
    // 首先清空事件
    events = {}
    outerEvents = {}
    // 添加事件
    attachEvents()
  }
})
// 切换的同时创建 tooltip实例
watch(isOpen, (newValue) => {
  if (newValue) {
    if (tirggerNode.value && popperNode.value) {
      popperInstance = createPopper(tirggerNode.value, popperNode.value, { placement: props.placement })
    } else {
      popperInstance?.destroy() // 销毁
    }
  }
}, { flush: 'post' })  // watch第二个参数代表dom节点生成以后在进行调用监听
</script>
<style scoped>
.utp-tooltip {
  display: inline-block;

  .utp-tooltip__tirgger {
    display: inline-block;
  }
}
</style>
