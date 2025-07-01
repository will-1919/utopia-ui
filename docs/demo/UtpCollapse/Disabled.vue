<!-- 抽屉禁用 -->
<script setup>
// 导入路径请参考安装部分
import { UtpCollapse, UtpCollapseItem } from '@will47/utopia-ui';
import { ref } from 'vue';

// 当前已经拉开的抽屉
const collapseActiveArr = ref([])
</script>

<template>
  <div>
    <utp-collapse v-model="collapseActiveArr">
      <utp-collapse-item name="a" title="正常的抽屉">
        <p>
          这是正常抽屉的内容部分
        </p>
      </utp-collapse-item>
      <utp-collapse-item name="lock" title="锁住的抽屉" disabled>
        <p>这是锁住抽屉的内容部分，这部分你看不到哦（ps:正常情况看到这段文字请联系我，那是出BUG了）</p>
      </utp-collapse-item>
    </utp-collapse>
  </div>
</template>
