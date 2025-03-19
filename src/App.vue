<template>
  <header>
    <utp-tooltip ref="tooltipRef" placement="right" :trigger="trigger" :popper-options="options">
      <img src="./assets/logo.svg" alt="Vue logo" class="logo" width="125" height="125">
      <template #content>
        <h1>测试插槽</h1>
      </template>
    </utp-tooltip>
  </header>
  <main>
    <!-- BUTTON按钮测试 -->
    <utp-button ref="btnRef">btn info</utp-button>
    <utp-button @click="open" plain>btn plain</utp-button>
    <utp-button @click="close" round>btn round</utp-button>
    <utp-button circle>btn circle</utp-button>
    <utp-button>btn sc</utp-button>
    <utp-button type="primary">btn primary</utp-button>
    <utp-button type="danger" plain>btn danger</utp-button>
    <utp-button type="success" size="big">btn success</utp-button>
    <utp-button type="warning" size="small">btn warning</utp-button>
    <utp-button type="info">btn</utp-button>
    <utp-button type="primary" size="big" loading>btn warning</utp-button>
    <utp-button type="primary" size="big" icon="arrow-up">btn</utp-button>
    <!-- Collapse测试 -->
    <utp-collapse v-model="openedValue">
      <utp-collapse-item :name="1">
        <template v-slot:title>
          <h1>new title</h1>
        </template>
        <h2>主要内容</h2>
        <p>次要内容</p>
      </utp-collapse-item>
      <utp-collapse-item :name="2" title="默认titleA">
        <div>默认内容A</div>
      </utp-collapse-item>
      <utp-collapse-item :name="3" title="默认titleB" disabled>
        <div>禁用状态</div>
      </utp-collapse-item>
    </utp-collapse>
    <!-- 图标测试 -->
    <utp-icon icon="arrow-up" :size="iconSize" type="primary" color="red"></utp-icon>
    <!-- 悬浮测试 -->

  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
// BUTTON按钮测试------------------------------------------------------------------
import type { ButtonInstance } from './components/UtpButton/types'
import UtpButton from './components/UtpButton/UtpButton.vue'
import UtpTooltip from './components/UtpTooltip/UtpTooltip.vue';

const btnRef = ref<ButtonInstance | null>(null)
// onMounted(() => {
//   console.log('btnRef', btnRef.value?.ref)
// })
// Collapse组件测试------------------------------------------------------------------
import UtpCollapse from './components/UtpCollapse/UtpCollapse.vue'
import UtpCollapseItem from './components/UtpCollapse/UtpCollapseItem.vue'
import UtpIcon from './components/UtpIcon/UtpIcon.vue'

const openedValue = ref([1])
// 图标测试
const iconSize = ref<any>('3xl')
// onMounted(() => {
//   setTimeout(() => {
//     iconSize.value = '2xl'
//   }, 2000)
// })
// tooltip测试
import type { TooltipInstance } from './components/UtpTooltip/types';
import type { Options } from '@popperjs/core';
const trigger = ref<any>('hover')
// onMounted(() => {
//   setTimeout(() => {
//     trigger.value = 'click'
//   }, 2000)
// })
const tooltipRef = ref<TooltipInstance | null>(null)
const open = () => {
  tooltipRef.value?.show()
}
const close = () => {
  tooltipRef.value?.hide()
}
const options = ref<Partial<Options>>({placement: 'right-end', strategy: 'fixed'})


</script>

<style></style>
