<template>
  <header>
    <img src="./assets/logo.svg" alt="Vue logo" class="logo" width="125" height="125">
  </header>
  <main>
    <Button type="primary" ref="btnRef">btn info</Button>
    <Button plain>btn plain</Button>
    <Button round disabled>btn round</Button>
    <Button circle>btn circle</Button>
    <Button>btn sc</Button>
    <Button type="primary">btn primary</Button>
    <Button type="danger" plain>btn danger</Button>
    <Button type="success" size="big">btn success</Button>
    <Button type="warning" size="small">btn warning</Button>
    <Button type="info">btn info</Button>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { ButtonInstance } from './components/Button/types'
import Button from './components/Button/Button.vue'

const btnRef = ref<ButtonInstance | null>(null)
onMounted(() => {
  console.log('btnRef', btnRef.value?.ref)
})
</script>

<style></style>
