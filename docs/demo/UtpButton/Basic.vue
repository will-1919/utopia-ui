<script setup>
import UtpButton from '@/components/UtpButton/UtpButton.vue'
</script>

<template>
  <!-- 默认 -->
  <utp-button>primary</utp-button>
  <!-- 传入不同的type -->

  <utp-button type="success">success</utp-button>
  <utp-button type="info">info</utp-button>
  <utp-button type="error">error</utp-button>
  <br>
  <br>
  <utp-button plain>primary</utp-button>
  <!-- 传入不同的type -->
  <utp-button type="success" plain>success</utp-button>
  <utp-button type="info" plain>info</utp-button>
  <utp-button type="error" plain>error</utp-button>
</template>
