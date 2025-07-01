<!-- 文本提示自定义提示内容 -->
<script setup>
// 导入路径请参考安装部分
import { UtpTooltip, UtpButton } from '@will47/utopia-ui';

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
