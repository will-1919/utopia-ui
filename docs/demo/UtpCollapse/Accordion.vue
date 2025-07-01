<!-- 抽屉菜单互锁模式 -->
<script setup>
// 导入路径请参考安装部分
import { UtpCollapse, UtpCollapseItem } from '@will47/utopia-ui';
import { ref } from 'vue';

// 当前已经拉开的抽屉
const collapseActiveArr = ref([])
</script>

<template>
  <div>
    <utp-collapse v-model="collapseActiveArr" accordion>
      <utp-collapse-item name="a" title="抽屉A">
        <p>这是抽屉A的内容部分</p>
      </utp-collapse-item>
      <utp-collapse-item name="b" title="抽屉B">
        <p>这是抽屉B的内容部分</p>
      </utp-collapse-item>
      <utp-collapse-item name="c" title="抽屉C">
        <p>这是抽屉C的内容部分</p>
      </utp-collapse-item>
    </utp-collapse>
  </div>
</template>
