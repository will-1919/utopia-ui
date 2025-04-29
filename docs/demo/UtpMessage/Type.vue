<!-- 按钮的基本使用 -->
<script setup>
// 导入路径请参考安装部分
import { createMessage } from '@/components/UtpMessage/method.ts'
import UtpButton from '@/components/UtpButton/UtpButton.vue'

const createPrimaryMessage = () => {
  createMessage({message: '这是一条主要消息', type: 'primary'})
}
const createSuccessMessage = () => {
  createMessage({message: '这是一条成功消息', type: 'success'})
}
const createErrorMessage = () => {
  createMessage({message: '这是一条错误消息', type: 'error'})
}
const createInfoMessage = () => {
  createMessage({message: '这是一条不重要消息', type: 'info'})
}
</script>

<template>
  <div>
    <UtpButton @click="createPrimaryMessage" type="primary" plain>创建主要消息</UtpButton>
    <UtpButton @click="createSuccessMessage" type="success" plain>创建正确消息</UtpButton>
    <UtpButton @click="createErrorMessage" type="error" plain>创建错误消息</UtpButton>
    <UtpButton @click="createInfoMessage" type="info" plain>创建不重要消息</UtpButton>
  </div>
</template>
