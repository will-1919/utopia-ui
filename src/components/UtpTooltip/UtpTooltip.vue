<template>
  <div ref="popperContentNode" v-on="events" class="utp-tooltip">
    <!-- 触发部分 -->
    <div ref="tirggerNode" class="utp-tooltip__tirgger">
      <slot></slot>
    </div>
    <!-- 展示部分 -->
    <Transition :name="transition">
      <div ref="popperNode" v-if="isOpen" class="utp-tooltip__popper">
        <slot name="content">
          {{ content }}
        </slot>
        <div id="arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, reactive, onUnmounted, computed } from 'vue';
import type { UtpTooltipProps, UtpTooltipEmits, TooltipInstance } from './types';
import { createPopper, offset } from '@popperjs/core';
import type { Instance } from '@popperjs/core';
import useClickOutside from '@/hooks/useClickOutside';
import { debounce } from 'lodash-es';

const props = withDefaults(defineProps<UtpTooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  transition: 'fade'
})
// 当前事件变量
let events: Record<string, any> = reactive({})
// let outerEvents: Record<string, any> = reactive({})
const emits = defineEmits<UtpTooltipEmits>()
const isOpen = ref(false)
const tirggerNode = ref<HTMLElement | null>(null)
const popperNode = ref<HTMLElement | null>(null);
const popperContentNode = ref<HTMLElement | undefined>();
let popperInstance: null | Instance = null
// poppor整合配置
const popperOptions = computed(() => {
  return {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 9]
        }
      }

    ],
    ...props.popperOptions
  }
})
// hover事件进入的防抖函数
const openDebounce = debounce(() => {
  isOpen.value = true
  emits('visible-change', isOpen.value)
  // console.log('打开执行了')
}, props.openDelay)
// hover事件划出的防抖函数
const closeDebounce = debounce(() => {
  isOpen.value = false
  emits('visible-change', isOpen.value)
  // console.log('关闭执行了')
}, props.closeDelay)
const open = () => {
  closeDebounce.cancel()
  openDebounce()
}
const close = () => {
  openDebounce.cancel()
  closeDebounce()
}
// 点击事件的回调函数
const togglePopper = () => {
  if (isOpen.value) {
    close()
  } else {
    open()
  }
}
// 添加事件韩式
const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = open
    events['mouseleave'] = close
    // outerEvents['mouseleave'] = close
  } else if (props.trigger === 'click') {
    events['click'] = togglePopper
  }
}
// 执行添加事件
if (!props.manual) {
  attachEvents()
}
// 执行useClickOutside函数
useClickOutside(popperContentNode, () => {
  if (props.trigger === 'click' && isOpen.value && !props.manual) {
    close()
  }
  if(isOpen.value) {
    emits('click-outside', true)
  }
})
// 监听事件改变
watch(() => props.trigger, (newValue, oldValue) => {
  if (newValue != oldValue) {
    // 首先清空事件
    events = {}
    // outerEvents = {}
    // 添加事件
    attachEvents()
  }
})
watch(() => props.manual, (isManual) => {
  if (isManual) {
    events = {}
    // outerEvents = {}
  } else {
    attachEvents()
  }
})
// 切换的同时创建 tooltip实例
watch(isOpen, (newValue) => {
  if (newValue) {
    if (tirggerNode.value && popperNode.value) {
      popperInstance = createPopper(tirggerNode.value, popperNode.value, popperOptions.value)
    } else {
      popperInstance?.destroy() // 销毁
    }
  }
}, { flush: 'post' })  // watch第二个参数代表dom节点生成以后在进行调用监听
defineExpose<TooltipInstance>({
  'show': open,
  'hide': close
})
onUnmounted(() => {
  popperInstance?.destroy() // 销毁
})
</script>
<style scoped>
.utp-tooltip {
  display: inline-block;

  .utp-tooltip__tirgger {
    display: inline-block;
  }
}
</style>
