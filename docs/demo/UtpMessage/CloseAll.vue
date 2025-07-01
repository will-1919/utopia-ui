<!-- 关闭全部消息弹窗 -->
<script setup>
// 导入路径请参考安装部分
import { UtpButton, createMessage, closeMessageAll } from '@will47/utopia-ui'

const createTextMessage = () => {
  createMessage({message: '这是一条文本消息', duration: 0})
  createMessage({message: '这是一条文本消息', duration: 0})
  createMessage({message: '这是一条文本消息', duration: 0})
}
const closeAllMessage = () => {
  closeMessageAll()
}
</script>

<template>
  <div>
    <UtpButton @click="createTextMessage" plain>创建三条文本消息</UtpButton>
    <UtpButton type="info" @click="closeAllMessage" plain>关闭所有信息</UtpButton>
  </div>
</template>
