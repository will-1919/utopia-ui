<template>
  <div @click="toggleDropdown" class="utp-select" :class="{ 'is-disabled': disabled }">
    <utp-tooltip ref="tooltipRef" placement="bottom-start" manual>
      <!-- 选择按钮 -->
      <utp-input v-model="innerValue" :disabled="disabled" :placeholder="placeholder"></utp-input>
      <!-- 选项下拉列表 -->
      <template #content>
        <ul class="utp-select__menu">
          <li v-for="(item, index) in options" :key="index" class="utp-select__menu-item"
            :class="{ 'is-disabled': disabled }" :id="`select-item-${item.value}`">
            {{ item.lable }}
          </li>
        </ul>
      </template>
    </utp-tooltip>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import UtpInput from '../UtpInput/UtpInput.vue';
import UtpTooltip from '../UtpTooltip/UtpTooltip.vue';
import type { Ref } from 'vue';
import type { TooltipInstance } from '../UtpTooltip/types';
import type { UtpSelectEmits, UtpSelectProps, SelectOptions } from './types';

defineExpose({
  name: 'UtpSelect'
})
const props = withDefaults(defineProps<UtpSelectProps>(), {})
const emits = defineEmits<UtpSelectEmits>()
// input双向绑定值
const innerValue = ref('')
// tooltip实例
const tooltipRef = ref() as Ref<TooltipInstance>
const isDropdownShow = ref(false)
const controlDropdown = (show: boolean) => {
  if (show) {
    tooltipRef.value.show()
  } else {
    tooltipRef.value.hide()
  }
  isDropdownShow.value = show
  emits('visible-change', show)
}
const toggleDropdown = () => {
  if (props.disabled) { return }
  if(isDropdownShow.value) {
    controlDropdown(false)
  } else {
    controlDropdown(true)
  }
}
</script>
