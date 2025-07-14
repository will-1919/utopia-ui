<!-- 按钮禁用 -->
<script setup>
// 导入路径请参考安装部分
import { UtpButton } from '@will1919/utopia-ui'
</script>

<template>
  <p>默认风格：</p>
  <utp-button disabled>primary</utp-button>
  <!-- 传入不同的type -->
  <utp-button disabled type="success">success</utp-button>
  <utp-button disabled type="info">info</utp-button>
  <utp-button disabled type="error">error</utp-button>
  <utp-button disabled type="text">text</utp-button>
  <br>
  <br>
  <p>镂空风格：</p>
  <utp-button disabled plain>primary</utp-button>
  <!-- 传入不同的type -->
  <utp-button disabled type="success" plain>success</utp-button>
  <utp-button disabled type="info" plain>info</utp-button>
  <utp-button disabled type="error" plain>error</utp-button>
  <utp-button disabled type="text" plain>text</utp-button>
</template>
