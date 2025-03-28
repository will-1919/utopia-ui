<script setup>
import UtpButton from '@/components/UtpButton/UtpButton.vue'
</script>

<template>
  <!-- 默认 -->
  <utp-button>primary</utp-button>
  <!-- 传入不同的type -->

  <utp-button type="success">success</utp-button>
  <utp-button type="info">info</utp-button>
  <utp-button type="danger">danger</utp-button>
  <utp-button type="warning">warning</utp-button>
  <br>
  <br>
  <utp-button plain>primary</utp-button>
  <!-- 传入不同的type -->
  <utp-button type="success" plain>success</utp-button>
  <utp-button type="info" plain>info</utp-button>
  <utp-button type="danger" plain>danger</utp-button>
  <utp-button type="warning" plain>warning</utp-button>
</template>
