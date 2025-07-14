<!-- 选择器自定义选项 -->
<script setup>
// 导入路径请参考安装部分
import { UtpSelect } from '@will1919/utopia-ui'
import { ref, h } from 'vue';

const selecthValue = ref('')
const selectOption = ref([
  {label: '弑君者', value: 'operator-1'},
  {label: '维什戴尔', value: 'operator-2'},
  {label: '伺夜', value: 'operator-3'}
])
const renderLabelHadler = (option) => {
  return h('div', { style: 'font-weight: bold'}, [ h('i', { style: 'margin-right: 5px'}, option.label), h('span', { style: 'color: #e5e5e5'}, option.value) ])
}

</script>

<template>
  <div>
    <utp-select v-model="selecthValue" :options="selectOption" placeholder="小刻都知道选谁" :renderLabel="renderLabelHadler"></utp-select>
  </div>
</template>
