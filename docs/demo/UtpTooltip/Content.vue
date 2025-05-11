<script setup>
// 导入路径请参考安装部分
import UtpTooltip from '@/components/UtpTooltip/UtpTooltip.vue'
import UtpButton from '@/components/UtpButton/UtpButton.vue'

</script>

<template>
  <div>
    <utp-tooltip placement="right" content="options级别更高">
      <utp-button plain>自定义提示内容</utp-button>
      <template #content>
        <i class="my-contnet">加粗倾斜文本提示</i>
      </template>
    </utp-tooltip>
  </div>
</template>

<style scoped>
.my-contnet {
  font-weight: bold;
}
</style>
