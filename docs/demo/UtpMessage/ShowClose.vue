<!-- 可以关闭的消息弹窗 -->
<script setup>
// 导入路径请参考安装部分
import { UtpButton, createMessage } from '@will1919/utopia-ui'

const createCanCloseMessage = () => {
  createMessage({ message: '这是一条可以关闭的消息', showClose: true })
}
const createMugenMessage = () => {
  createMessage({ message: '这是一条不会自动关闭的消息', showClose: true, duration: 0 })
}
</script>

<template>
  <div>
    <UtpButton @click="createCanCloseMessage" plain>创建可以关闭的消息</UtpButton>
    <UtpButton type="error" @click="createMugenMessage" plain>创建不会自动关闭的消息</UtpButton>
  </div>
</template>
