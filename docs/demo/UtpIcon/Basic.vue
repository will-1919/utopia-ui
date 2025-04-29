<!-- 按钮的基本使用 -->
<script setup>
// 导入路径请参考安装部分
import UtpIcon from '@/components/UtpIcon/UtpIcon.vue'
</script>

<template>
  <!-- 常用图标 -->
  <div class="group-box">
    <p>Classic Solid</p>
    <div class="group-content">
      <utp-icon icon="fa-solid fa-house"></utp-icon>
      <utp-icon icon="fa-solid fa-circle-user"></utp-icon>
      <utp-icon icon="fa-solid fa-image"></utp-icon>
      <utp-icon icon="fa-solid fa-file"></utp-icon>
      <utp-icon icon="fa-solid fa-camera"></utp-icon>
      <utp-icon icon="fa-solid fa-calendar"></utp-icon>
      <utp-icon icon="fa-solid fa-cloud"></utp-icon>
      <utp-icon icon="fa-solid fa-truck"></utp-icon>
      <utp-icon icon="fa-solid fa-thumbs-up"></utp-icon>
      <utp-icon icon="fa-solid fa-face-smile"></utp-icon>
      <utp-icon icon="fa-solid fa-headphones"></utp-icon>
      <utp-icon icon="fa-solid fa-bell"></utp-icon>
      <utp-icon icon="fa-solid fa-user"></utp-icon>
      <utp-icon icon="fa-solid fa-comment"></utp-icon>
      <utp-icon icon="fa-solid fa-envelope"></utp-icon>
      <utp-icon icon="fa-solid fa-magnifying-glass"></utp-icon>
    </div>
    <p>Classic Regular</p>
    <div class="group-content">
      <utp-icon icon="fa-regular fa-circle-user"></utp-icon>
      <utp-icon icon="fa-regular fa-image"></utp-icon>
      <utp-icon icon="fa-regular fa-file"></utp-icon>
      <utp-icon icon="fa-regular fa-calendar"></utp-icon>
      <utp-icon icon="fa-regular fa-thumbs-up"></utp-icon>
      <utp-icon icon="fa-regular fa-face-smile"></utp-icon>
      <utp-icon icon="fa-regular fa-bell"></utp-icon>
      <utp-icon icon="fa-regular fa-user"></utp-icon>
      <utp-icon icon="fa-regular fa-comment"></utp-icon>
      <utp-icon icon="fa-regular fa-envelope"></utp-icon>
      <utp-icon icon="fa-regular fa-font-awesome"></utp-icon>
      <utp-icon icon="fa-regular fa-star"></utp-icon>
      <utp-icon icon="fa-regular fa-heart"></utp-icon>
      <utp-icon icon="fa-regular fa-circle-xmark"></utp-icon>
      <utp-icon icon="fa-regular fa-calendar-days"></utp-icon>
      <utp-icon icon="fa-regular fa-clipboard"></utp-icon>
    </div>
    <p>Classic Brands</p>
    <div class="group-content">
      <utp-icon icon="fa-brands fa-font-awesome"></utp-icon>
      <utp-icon icon="fa-brands fa-web-awesome"></utp-icon>
      <utp-icon icon="fa-brands fa-github"></utp-icon>
      <utp-icon icon="fa-brands fa-bluesky"></utp-icon>
      <utp-icon icon="fa-brands fa-facebook"></utp-icon>
      <utp-icon icon="fa-brands fa-linkedin"></utp-icon>
      <utp-icon icon="fa-brands fa-discord"></utp-icon>
      <utp-icon icon="fa-brands fa-slack"></utp-icon>
      <utp-icon icon="fa-brands fa-algolia"></utp-icon>
      <utp-icon icon="fa-brands fa-figma"></utp-icon>
      <utp-icon icon="fa-brands fa-youtube"></utp-icon>
      <utp-icon icon="fa-brands fa-apple"></utp-icon>
      <utp-icon icon="fa-brands fa-google"></utp-icon>
      <utp-icon icon="fa-brands fa-pied-piper-hat"></utp-icon>
      <utp-icon icon="fa-brands fa-kickstarter"></utp-icon>
      <utp-icon icon="fa-brands fa-docker"></utp-icon>
    </div>
  </div>
</template>

<style scoped>
  .group-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
