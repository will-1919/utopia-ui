<!-- 开关禁用 -->
<script setup>
// 导入路径请参考安装部分
import { UtpSwitch } from '@will47/utopia-ui';
import { ref } from 'vue';

const switchValue = ref(true)
</script>

<template>
  <div class="switch-box">
    <utp-switch v-model="switchValue" disabled></utp-switch>
    <i class="dips">当前switchValue：{{switchValue}}</i>
  </div>
</template>

<style scoped>
.switch-box {
  display: flex;
  align-items: center;
  .dips {
    margin-left: 10px;
    font-weight: bold;
    font-size: 14px;
  }
}
</style>
