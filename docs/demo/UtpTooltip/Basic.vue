<!-- 文本提示基础使用 -->
<script setup>
// 导入路径请参考安装部分
import { UtpTooltip, UtpButton } from '@will1919/utopia-ui';

</script>

<template>
  <div>
    <div class="top-group-box">
      <utp-tooltip content="上方偏左" placement="top-start">
        <utp-button plain>文本提示上方偏左</utp-button>
      </utp-tooltip>

      <utp-tooltip content="正上方" placement="top">
        <utp-button plain>文本提示正上方</utp-button>
      </utp-tooltip>
      <utp-tooltip content="上方偏右" placement="top-end">
        <utp-button plain>文本提示上方偏右</utp-button>
      </utp-tooltip>
    </div>
    <div class="left-and-right-group-box">
      <div class="left-group-box">
        <utp-tooltip class="need-top" content="左侧偏上" placement="left-start">
          <utp-button plain>文本提示左侧偏上</utp-button>
        </utp-tooltip>
        <utp-tooltip class="need-top" content="正左方" placement="left">
          <utp-button plain>文本提示正左方</utp-button>
        </utp-tooltip>
        <utp-tooltip class="need-top" content="左侧偏下" placement="left-end">
          <utp-button plain>文本提示左侧偏下</utp-button>
        </utp-tooltip>
      </div>
      <div class="trigger-click-box">
        <utp-tooltip class="trigger-click" content="点击触发" trigger="click" placement="top">
          <utp-button plain>点击触发</utp-button>
        </utp-tooltip>
      </div>
      <div class="right-group-box">
        <utp-tooltip class="need-top" content="右侧偏上" placement="right-start">
          <utp-button plain>文本提示右侧偏上</utp-button>
        </utp-tooltip>
        <utp-tooltip class="need-top" content="正右方" placement="right">
          <utp-button plain>文本提示正右方</utp-button>
        </utp-tooltip>
        <utp-tooltip class="need-top" content="右侧偏下" placement="right-end">
          <utp-button plain>文本提示右侧偏下</utp-button>
        </utp-tooltip>
      </div>
    </div>
    <div class="bottom-group-box">
      <utp-tooltip content="下方偏左" placement="bottom-start">
        <utp-button plain>文本提示下方偏左</utp-button>
      </utp-tooltip>

      <utp-tooltip content="正下方" placement="bottom">
        <utp-button plain>文本提示正下方</utp-button>
      </utp-tooltip>
      <utp-tooltip content="下方偏右" placement="bottom-end">
        <utp-button plain>文本提示下方偏右</utp-button>
      </utp-tooltip>
    </div>
  </div>
</template>

<style scoped>
.top-group-box,
.bottom-group-box {
  padding: 0 48px;
  display: flex;
  justify-content: space-between;
}

.bottom-group-box {
  margin-top: 20px;
}

.left-and-right-group-box {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.trigger-click-box {
  display: flex;
  align-items: center;
}

.left-group-box,
.right-group-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.need-top {
  margin-top: 10px;
}

.need-top:first-child {
  margin-top: 0;
}
</style>
