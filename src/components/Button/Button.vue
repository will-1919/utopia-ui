<template>
    <button class="utp-button" :class="{
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        [`utp-button--${type}`]: type
    }" :disabled="!!disabled">
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script lang="ts" setup>
import { ButtonProps } from './types'
defineProps(ButtonProps)  // 声明按钮的一系列属性变量
</script>

<style scoped></style>