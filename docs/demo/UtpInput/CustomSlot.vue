<script setup>
import { ref } from 'vue';
// 导入路径请参考安装部分
import UtpInput from '@/components/UtpInput/UtpInput.vue'
import UtpIcon from '@/components/UtpIcon/UtpIcon.vue'
import UtpSelect from '@/components/UtpSelect/UtpSelect.vue';

const inputValue = ref('')
const selecthValue = ref('')
const selectOption = ref([
  { label: '弑君者', value: 'operator-1' },
  { label: '维什戴尔', value: 'operator-2' },
  { label: '伺夜', value: 'operator-3' }
])
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
