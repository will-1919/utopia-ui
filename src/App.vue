<template>
  <header>
    <img src="./assets/logo.svg" alt="Vue logo" class="logo" width="125" height="125">
  </header>
  <main>
    <utp-button @click="test" ref="btnRef">btn info</utp-button>
    <utp-button plain>btn plain</utp-button>
    <utp-button round disabled>btn round</utp-button>
    <utp-button circle>btn circle</utp-button>
    <utp-button>btn sc</utp-button>
    <utp-button type="primary">btn primary</utp-button>
    <utp-button type="danger" plain>btn danger</utp-button>
    <utp-button type="success" size="big">btn success</utp-button>
    <utp-button type="warning" size="small">btn warning</utp-button>
    <utp-button type="info">btn</utp-button>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { ButtonInstance } from './components/UtpButton/types'
import UtpButton from './components/UtpButton/UtpButton.vue'

const btnRef = ref<ButtonInstance | null>(null)
onMounted(() => {
  console.log('btnRef', btnRef.value?.ref)
})
const test = () => {
  alert('测试')
}
</script>

<style></style>
