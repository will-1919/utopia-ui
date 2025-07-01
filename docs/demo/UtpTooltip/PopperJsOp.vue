<!-- 文本提示配置 -->
<script setup>
// 导入路径请参考安装部分
import { UtpTooltip, UtpButton } from '@will47/utopia-ui';
import { ref } from 'vue'

const options = ref({ placement: 'left-end' })
</script>

<template>
  <div>
    <utp-tooltip placement="top" :popper-options="options" content="options级别更高">
      <utp-button plain>修改popperjs配置</utp-button>
    </utp-tooltip>
  </div>
</template>
