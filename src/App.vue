<template>
  <header>
    <utp-tooltip ref="tooltipRef" placement="right" :trigger="trigger" :popper-options="options">
      <img src="./assets/logo.svg" alt="Vue logo" class="logo" width="125" height="125">
      <template #content>
        <h1>测试插槽</h1>
      </template>
    </utp-tooltip>
    <utp-dropdown @visible-change="(e) => { console.log(e) }" @select="(e) => { console.log(e) }"
      :menu-options="menuOptions" placement="bottom" :trigger="trigger" hideAfterClick>
      <img src="./assets/logo.svg" alt="Vue logo" class="logo" width="125" height="125">
      <template #content>
        <h1>测试插槽</h1>
      </template>
    </utp-dropdown>
  </header>
  <main>
    <!-- BUTTON按钮测试 -->
    <utp-button type="text">text</utp-button>
    <utp-button type="text" plain>text</utp-button>
    <utp-button>btn info</utp-button>
    <utp-button @click="open" plain>btn plain</utp-button>
    <utp-button @click="close" round>btn round</utp-button>
    <utp-button circle>btn circle</utp-button>
    <utp-button>btn sc</utp-button>
    <utp-button type="primary" plain>btn primary</utp-button>
    <utp-button type="success" size="big">btn success</utp-button>
    <utp-button type="error" size="small">btn error</utp-button>
    <utp-button type="info">btn</utp-button>
    <utp-button type="primary" size="big" loading>btn error</utp-button>
    <utp-button @click="closeAll" type="primary" size="big" icon="arrow-up">closeAll</utp-button>
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
    <!-- message测试 -->
    <!-- <utp-message :message="'这是一条信息'" :duration="0" :show-close="true"></utp-message> -->
    <!-- input测试 -->
    <br>
    <utp-input v-model="inputValue" type="text" clearable>
      <template v-slot:prepend>
        <utp-icon icon="user"></utp-icon>
      </template>
    </utp-input>
    <!-- 测试开关 -->
     <br>
     <br>
    <utp-switch v-model="switchValue" active-text="打开" inactive-text="关闭" active-value="right" in-active-value="left"></utp-switch>
    <span>switchValue-{{ switchValue }}</span>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, h } from 'vue';
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
const trigger = ref<any>('click')
// onMounted(() => {
//   setTimeout(() => {
//     trigger.value = 'click'
//   }, 2000)
// })
const tooltipRef = ref<TooltipInstance | null>(null)
const open = () => {
  // tooltipRef.value?.show()
  createMessage({ message: '测试函数形式2' })
}
const close = () => {
  tooltipRef.value?.hide()
}
const options = ref<Partial<Options>>({ placement: 'right' })
// 测试dropdown组件
import UtpDropdown from './components/UtpDropdown/UtpDropdown.vue';
import type { MenuOptions } from './components/UtpDropdown/types';

const menuOptions = ref<MenuOptions[]>([
  { key: 1, label: h('h1', '这个加粗了') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
])

// 测试message组件
import { createMessage, closeAll } from './components/UtpMessage/method';

onMounted(() => {
  // createMessage({ message: '测试函数形式1', duration: 0, showClose: true })
  // createMessage({ message: '测试函数形式1', duration: 0, showClose: true })
  // createMessage({ message: '测试函数形式1', duration: 0, showClose: true })
  // createMessage({ message: '测试函数形式2', duration: 2000 })
  // createMessage({ message: '测试函数形式3', duration: 0 })
})
// 测试input组件
import UtpInput from './components/UtpInput/UtpInput.vue';
const inputValue = ref('')
const showPassword = ref<boolean>(false)
// 测试开关
import UtpSwitch from './components/UtpSwitch/UtpSwitch.vue';
const switchValue = ref('left')

</script>

<style></style>
