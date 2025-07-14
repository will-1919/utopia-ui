<!-- 消息弹窗的基本使用 -->
<script setup>
// 导入路径请参考安装部分
import { UtpButton, createMessage } from '@will1919/utopia-ui'
import { h } from 'vue'

const createTextMessage = () => {
  createMessage({ message: '这是一条文本消息' })
}
const createVnodeMessage = () => {
  createMessage({ message: h('i', { style: { 'font-weight': 'bold' } }, '这是一个斜体加粗的Vnode消息') })
}
</script>

<template>
  <div>
    <UtpButton @click="createTextMessage" plain>创建文本消息</UtpButton>
    <UtpButton @click="createVnodeMessage" plain>创建Vnode消息</UtpButton>
  </div>
</template>
