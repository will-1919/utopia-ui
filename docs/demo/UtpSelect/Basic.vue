<!-- 选择器基础使用 -->
<script setup>
// 导入路径请参考安装部分
import UtpSelect from '@/components/UtpSelect/UtpSelect.vue';
import { ref } from 'vue';

const selecthValue = ref('')
const selectOption = ref([
  {label: '弑君者', value: 'operator-1'},
  {label: '维什戴尔', value: 'operator-2'},
  {label: '伺夜', value: 'operator-3'}
])
</script>

<template>
  <div>
    <utp-select v-model="selecthValue" :options="selectOption" placeholder="小刻都知道选谁"></utp-select>
  </div>
</template>
