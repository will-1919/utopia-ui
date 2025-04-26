<!-- 按钮的基本使用 -->
<script setup>
// 导入路径请参考安装部分
import UtpIcon from '@/components/UtpIcon/UtpIcon.vue'
</script>

<template>
  <!-- 常用图标 -->
  <div class="group-box">
    <p>Classic</p>
    <div class="group-content">
      <utp-icon icon="fa-house"></utp-icon>
      <utp-icon icon="fa-brands fa-github"></utp-icon>
    </div>
  </div>
</template>

<style scoped>
  .group-box {

  }
  .group-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
