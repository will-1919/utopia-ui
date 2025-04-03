<template>
  <div @click="toggleDropdown" class="utp-select" :class="{ 'is-disabled': disabled }">
    <utp-tooltip @click-outside="controlDropdown(false)" :popper-options="popperOption" ref="tooltipRef"
      placement="bottom-start" manual>
      <!-- 选择按钮 -->
      <utp-input ref="inputRef" v-model="states.inputValue" readonly :disabled="disabled" :placeholder="placeholder">
        <template #suffix>
          <utp-icon icon="angle-down" class="header-angle" :class="{'is-active': isDropdownShow}"></utp-icon>
        </template>
      </utp-input>
      <!-- 选项下拉列表 -->
      <template #content>
        <ul class="utp-select__menu">
          <li @click.stop="itemSelect(item)" v-for="(item, index) in options" :key="index" class="utp-select__menu-item"
            :class="{ 'is-disabled': item.disabled, 'is-selected': states.selectOption?.value === item.value }"
            :id="`select-item-${item.value}`">
            {{ item.lable }}
          </li>
        </ul>
      </template>
    </utp-tooltip>
  </div>
</template>
<script setup lang="ts">
import UtpIcon from '../UtpIcon/UtpIcon.vue';
import { reactive, ref } from 'vue';
import UtpInput from '../UtpInput/UtpInput.vue';
import UtpTooltip from '../UtpTooltip/UtpTooltip.vue';
import type { Ref } from 'vue';
import type { TooltipInstance } from '../UtpTooltip/types';
import type { UtpSelectEmits, UtpSelectProps, SelectOptions, SelectStates } from './types';
import type { InputInstance } from '../UtpInput/types';

defineExpose({
  name: 'UtpSelect'
})
const props = withDefaults(defineProps<UtpSelectProps>(), {})
const emits = defineEmits<UtpSelectEmits>()
// 查找选项函数
const findOption = (value: string | number) => {
  const option = props.options.find((item) => {
    return item.value === value
  })
  return option ? option : null
}
const initialOption = findOption(props.modelValue)
// 组件当前的状态值对象
const states = reactive<SelectStates>({
  inputValue: initialOption ? initialOption.lable : '',
  selectOption: initialOption
})
// tooltip实例
const tooltipRef = ref() as Ref<TooltipInstance>
const inputRef = ref() as Ref<InputInstance>
// 对其下拉菜单与input的长度
const popperOption: any = {
  modifiers: [
    // 保留popper的偏移量
    {
      name: 'offset',
      options: {
        offset: [0, 9]
      }
    },
    // 控制宽度相同代码来源https://codesandbox.io/p/sandbox/bitter-sky-pe3z9?file=%2Fsrc%2Findex.js
    {
      name: "sameWidth",
      enabled: true,
      fn: ({ state }: { state: any }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: "beforeWrite",
      requires: ["computeStyles"],
    }
  ],
}
const isDropdownShow = ref(false)
// 控制下拉菜单是否展示函数
const controlDropdown = (show: boolean) => {
  if (show) {
    tooltipRef.value.show()
  } else {
    tooltipRef.value.hide()
  }
  isDropdownShow.value = show
  emits('visible-change', show)
}
// 切换下拉菜单是否打开
const toggleDropdown = () => {
  if (props.disabled) { return }
  if (isDropdownShow.value) {
    controlDropdown(false)
  } else {
    controlDropdown(true)
  }
}
// 点击菜单中的选项
const itemSelect = (e: SelectOptions) => {
  if (e.disabled) { return }
  states.inputValue = e.lable
  states.selectOption = e
  emits('change', e.value)
  emits('update:modelValue', e.value)
  controlDropdown(false)
  inputRef.value.ref.focus()
}
</script>
