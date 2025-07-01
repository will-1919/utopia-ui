<!-- 按钮图标与加载 -->
<script setup>
// 导入路径请参考安装部分
import { UtpButton } from '@will47/utopia-ui'
</script>

<template>
  <p>
    支持图标：图标可以参考Icon组件文档或
    <a href="https://fontawesome.com/search" target="_blank"> https://fontawesome.com/search</a>
    <br>
    <small style="color: var(--utp-color-primary);">ps：不支持pro角标的图标哦，露出贫穷的微笑
      (￣ω￣)</small>
  </p>
  <utp-button icon="fa-solid fa-thumbs-up">a-solid fa-thumbs-up</utp-button>
  <utp-button icon="fa-solid fa-comment">a-solid fa-thumbs-up</utp-button>
  <utp-button icon="fa-solid fa-thumbs-up" circle></utp-button>
  <br>
  <br>
  <p>加载状态：</p>
  <utp-button loading>loading</utp-button>
</template>
