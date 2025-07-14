<!-- 按钮的基本使用 -->
<script setup>
// 导入路径请参考安装部分
import { UtpButton } from '@will1919/utopia-ui'
</script>

<template>
  <!-- 默认 -->
  <p>默认风格：</p>
  <utp-button>primary</utp-button>
  <!-- 传入不同的type -->
  <utp-button type="success">success</utp-button>
  <utp-button type="info">info</utp-button>
  <utp-button type="error">error</utp-button>
  <utp-button type="text">text</utp-button>
  <br>
  <br>
  <p>镂空风格：</p>
  <utp-button plain>primary</utp-button>
  <!-- 传入不同的type -->
  <utp-button type="success" plain>success</utp-button>
  <utp-button type="info" plain>info</utp-button>
  <utp-button type="error" plain>error</utp-button>
  <utp-button type="text" plain>text</utp-button>
</template>
