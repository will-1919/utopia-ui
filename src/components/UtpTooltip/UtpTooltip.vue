<template>
  <div class="utp-tooltip">
    <!-- 触发部分 -->
    <div @click="togglePopper" ref="tirggerNode" class="utp-tooltip__tirgger">
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
import { ref, watch } from 'vue';
import type { UtpTooltipProps, UtpTooltipEmits } from './types';
import { createPopper } from '@popperjs/core';
import type { Instance } from '@popperjs/core';

const props = withDefaults(defineProps<UtpTooltipProps>(), {
  placement: 'bottom'
})
const emits = defineEmits<UtpTooltipEmits>()
const isOpen = ref(false)
const tirggerNode = ref<HTMLElement | null>(null)
const popperNode = ref<HTMLElement | null>(null);
let popperInstance: null | Instance = null
// 切换是否展示
const togglePopper = () => {
  isOpen.value = !isOpen.value
  emits('visible-change', isOpen.value)
}

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
