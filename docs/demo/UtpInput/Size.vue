<!-- 输入框大小 -->
<script setup>
import { ref } from 'vue';
// 导入路径请参考安装部分
import { UtpInput } from '@will47/utopia-ui';

const inputValue = ref('')
const smallValue = ref('')
const bigValue = ref('')
</script>

<template>
  <div>
    <utp-input size="small" v-model="smallValue" placeholder="这是小号"></utp-input>
    <br>
    <br>
    <utp-input v-model="inputValue" placeholder="这是默认"></utp-input>
    <br>
    <br>
    <utp-input size="big" v-model="bigValue" placeholder="这是大号"></utp-input>
  </div>
</template>

<style scoped>
.dips {
  margin-left: 10px;
  font-weight: bold;
  font-size: 14px;
}
</style>
