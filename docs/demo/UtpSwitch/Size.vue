<!-- 开关不同大小 -->
<script setup>
// 导入路径请参考安装部分
import { UtpSwitch } from '@will47/utopia-ui';
import { ref } from 'vue';

const smallValue = ref(false)
const switchValue = ref(false)
const bigValue = ref(false)
</script>

<template>
  <div class="switch-box">
    <utp-switch class="switch-item" v-model="smallValue" size="small"></utp-switch>
    <utp-switch class="switch-item" v-model="switchValue"></utp-switch>
    <utp-switch class="switch-item" v-model="bigValue" size="big"></utp-switch>
  </div>
</template>

<style scoped>
.switch-item {
  margin-right: 10px;
}
</style>
