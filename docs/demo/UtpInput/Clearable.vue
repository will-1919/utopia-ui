<!-- 输入框一键清除 -->
<script setup>
import { ref } from 'vue';
// 导入路径请参考安装部分
import { UtpInput } from '@will1919/utopia-ui';

const inputValue = ref('')
</script>

<template>
  <div>
    <utp-input v-model="inputValue" placeholder="请输入..." clearable></utp-input>
    <br>
    <br>
    <i class="dips">当前inputValue：{{ inputValue }}</i>
  </div>
</template>

<style scoped>
.dips {
  margin-left: 10px;
  font-weight: bold;
  font-size: 14px;
}
</style>
