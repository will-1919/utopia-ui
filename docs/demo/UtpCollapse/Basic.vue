<!-- 按钮的基本使用 -->
<script setup>
// 导入路径请参考安装部分
import UtpCollapse from '@/components/UtpCollapse/UtpCollapse.vue'
import UtpCollapseItem from '@/components/UtpCollapse/UtpCollapseItem.vue'
import { ref } from 'vue';

// 当前已经拉开的抽屉
const collapseActiveArr = ref(['b'])
</script>

<template>
  <div>
    <utp-collapse v-model="collapseActiveArr">
      <utp-collapse-item name="a" title="抽屉A">
        <p>
          这是抽屉A的内容部分
        </p>
      </utp-collapse-item>
      <utp-collapse-item name="b" title="抽屉B">
        <p>这是抽屉B的内容部分</p>
      </utp-collapse-item>
      <utp-collapse-item name="c">
        <template v-slot:title>
          <i class="collapse-c-title">
            斜体加粗抽屉C
          </i>
        </template>
        <p>这是抽屉C的内容部分</p>
      </utp-collapse-item>
    </utp-collapse>
  </div>
</template>

<style scoped>
.collapse-c-title {
  font-weight: bold;
}
</style>
