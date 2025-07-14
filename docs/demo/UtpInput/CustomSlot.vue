<!-- 组合式输入框 -->
<script setup>
import { ref } from 'vue';
// 导入路径请参考安装部分
import { UtpInput, UtpIcon } from '@will1919/utopia-ui';

const inputValue = ref('')
</script>

<template>
  <div>
    <utp-input v-model="inputValue" placeholder="组合式输入框">
      <template #prepend>prepend</template>
      <template #prefix>
        <span>prefix</span>
      </template>
      <template #suffix>suffix</template>
      <template #append>append</template>
    </utp-input>
    <br>
    <br>
    <utp-input v-model="inputValue" placeholder="组合式输入框">
      <template #prepend>Https://</template>
    </utp-input>
    <br>
    <br>
    <utp-input v-model="inputValue" placeholder="组合式输入框">
      <template #prefix>
        <utp-icon icon="fa-solid fa-magnifying-glass"></utp-icon>
      </template>
    </utp-input>
    <br>
    <br>
    <utp-input v-model="inputValue" placeholder="组合式输入框">
      <template #suffix>
        <utp-icon icon="fa-solid fa-lock"></utp-icon>
      </template>
    </utp-input>
    <br>
    <br>
    <utp-input class="my-input" v-model="inputValue" placeholder="组合式输入框">
      <template #append>
        .com
      </template>
    </utp-input>
  </div>
</template>
