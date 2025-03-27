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
</template>
