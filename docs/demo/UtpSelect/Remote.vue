<!-- 选择器远程搜索 -->
<script setup>
import { ref } from 'vue'
// 路径导入参考安装部分
import { UtpSelect } from '@will47/utopia-ui'
const selecthValue = ref('')
const operatorArr = ref([
  '信仰搅拌机',
  '荒芜拉普兰德',
  '娜仁图亚',
  '维什戴尔',
  '逻各斯',
  '刻俄柏',
  '艾雅法拉',
  '重岳',
  '令',
  '夕',
  '年',
  '黍',
  '余'
])

const remoteFilter = (query) => {
  return new Promise((resolve) => {
    if (query) {
      setTimeout(() => {

        const options = operatorArr.value.filter((item) => {
          return item.includes(query)
        }).map(label => {
          return { label, value: label }
        })
        resolve(options)
      }, 500)
    } else {
      resolve([])
    }
  })
}
</script>

<template>
  <div>
    <utp-select v-model="selecthValue" placeholder="小刻都知道怎么搜" filterable remote :remoteMethod="remoteFilter"></utp-select>
    <!-- <select-test></select-test> -->
  </div>
</template>
