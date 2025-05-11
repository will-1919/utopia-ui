<script setup>
// 导入路径请参考安装部分
import UtpTooltip from '@/components/UtpTooltip/UtpTooltip.vue'
import UtpButton from '@/components/UtpButton/UtpButton.vue'
import { ref } from 'vue';

const tooltipRef = ref(null)

const openTooltip = () => {
  tooltipRef.value.show()
}
const closeTooltip = () => {
  tooltipRef.value.hide()
}
</script>

<template>
  <div>
    <utp-tooltip ref="tooltipRef" placement="top" content="手动控制的提示文本" manual>
      <div class="tooltip-area">
        <i>提示显示区域</i>
      </div>
    </utp-tooltip>
    <div class="tooltip-btn">
      <utp-button @click="openTooltip">显示提示文本</utp-button>
      <utp-button @click="closeTooltip"  type="error">隐藏提示文本</utp-button>
    </div>
  </div>
</template>

<style scoped>
.tooltip-area {
  width: 100px;
  height: 100px;
  background-color: #e5e5e5;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.tooltip-btn {
  margin-top: 20px;
}
</style>
