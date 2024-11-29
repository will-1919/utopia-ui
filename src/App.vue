<template>
    <header>
        <img src="./assets/logo.svg" alt="Vue logo" class="logo" width="125" height="125">
    </header>
    <main>
        <Button ref="btnRef">btn test</Button>
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