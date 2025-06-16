<template>
  <div @click="toggleDropdown" @mouseleave="states.mouseHover = false" @mouseenter="states.mouseHover = true"
    class="utp-select" :class="{ 'is-disabled': disabled }">
    <utp-tooltip @click-outside="controlDropdown(false)" :popper-options="popperOption" ref="tooltipRef"
      placement="bottom-start" manual>
      <!-- 选择按钮 -->
      <utp-input @keydown="handleKeydown" ref="inputRef" v-model="states.inputValue" @input="debounceOnFilter"
        :readonly="!filterable || !isDropdownShow" :disabled="disabled" :placeholder="filteredPlaceholder">
        <template #suffix>
          <!-- 清除图标 -->
          <utp-icon @mousedown.prevent="() => { }" @click="onClear" v-if="showClearIcon" icon="circle-xmark"
            class="utp-input__clear"></utp-icon>
          <!-- 指示箭头 -->
          <utp-icon v-else icon="angle-down" class="header-angle" :class="{ 'is-active': isDropdownShow }"></utp-icon>
        </template>
      </utp-input>
      <!-- 选项下拉列表 -->
      <template #content>
        <!-- loading状态 -->
        <div class="utp-select__loading" v-if="states.loading">
          <utp-icon icon="spinner" spin></utp-icon>
        </div>
        <!-- 无数据 -->
        <div class="utp-select__loading" v-else-if="filterable && filteredOptions.length === 0">
          暂无数据~
        </div>
        <ul v-else class="utp-select__menu">
          <li @click.stop="itemSelect(item)" v-for="(item, index) in filteredOptions" :key="index"
            class="utp-select__menu-item" :class="{
              'is-disabled': item.disabled,
              'is-selected': states.selectOption?.value === item.value,
              'is-highlighted': states.highlightIndex === index
            }" :id="`select-item-${item.value}`">
            <render-vnode :v-node="renderLabel ? renderLabel(item) : item.label"></render-vnode>
          </li>
        </ul>
      </template>
    </utp-tooltip>
  </div>
</template>
<script setup lang="ts">
import UtpIcon from '../UtpIcon/UtpIcon.vue';
import RenderVnode from '../Common/RenderVnode';
import { isFunction, debounce } from 'lodash-es';
import { computed, reactive, ref, watch, inject } from 'vue';
import { formItemContextKey } from '../UtpForm/types';
import UtpInput from '../UtpInput/UtpInput.vue';
import UtpTooltip from '../UtpTooltip/UtpTooltip.vue';
import type { Ref } from 'vue';
import type { TooltipInstance } from '../UtpTooltip/types';
import type { UtpSelectEmits, UtpSelectProps, SelectOptions, SelectStates } from './types';
import type { InputInstance } from '../UtpInput/types';

defineExpose({
  name: 'UtpSelect'
})
const props = withDefaults(defineProps<UtpSelectProps>(), {
  options: () => [] // 设置数组默认方式
})
const emits = defineEmits<UtpSelectEmits>()
// 注意因为有的时候会单独使用Input组件，所以要给inject接收provide传递数据加默认值null，否则会在控制台有Vue warn警告
const formItemContext = inject(formItemContextKey, null)
// 执行表单验证
const runValidation = (trigger?: string) => {
  formItemContext?.validate(trigger).catch((e) => {
    console.log('item error', e.errors)
  })
}
const timeout = computed(() => {
  return props.remote ? 300 : 0
})
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
  inputValue: initialOption ? initialOption.label : '',
  selectOption: initialOption,
  mouseHover: false,
  loading: false,
  highlightIndex: -1
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
// 筛选后的数组
const filteredOptions = ref<SelectOptions[]>(props.options)
watch(() => props.options, (newOptions) => {
  filteredOptions.value = newOptions
})
const generateFilterOptions = async (serchValue: string) => {
  if (!props.filterable) { return }
  // 普通筛选
  if (props.filterMethod && isFunction(props.filterMethod)) {
    filteredOptions.value = props.filterMethod(serchValue)
    // 异步筛选
  } else if (props.remote && props.remoteMethod && isFunction(props.remoteMethod)) {
    states.loading = true
    try {
      filteredOptions.value = await props.remoteMethod(serchValue)
    }
    catch (e) {
      console.log('error:', e)
      filteredOptions.value = []
    }
    finally {
      states.loading = false
    }
  }
  else {
    filteredOptions.value = props.options.filter((option) => {
      return option.label.includes(serchValue)
    })
  }
  states.highlightIndex = -1
}
const onFilter = () => {
  generateFilterOptions(states.inputValue)
}
const debounceOnFilter = debounce(() => {
  onFilter()
}, timeout.value)
const isDropdownShow = ref(false)
// 是否展示清除图标
const showClearIcon = computed(() => {
  // 1.鼠标进入
  // 2.clearable为真
  // 3.必须有过选项
  // 4.input不为空
  return props.clearable && states.mouseHover && states.selectOption && states.inputValue.trim() !== ''
})
// 点击清空图标回调函数
const onClear = () => {
  states.selectOption = null,
    states.inputValue = '',
    emits('clear')
  emits('change', '')
  emits('update:modelValue', '')
}
const filteredPlaceholder = computed(() => {
  if (props.filterable && states.selectOption && isDropdownShow.value) {
    return states.selectOption.label
  } else {
    return props.placeholder
  }
})
// 控制下拉菜单是否展示函数
const controlDropdown = (show: boolean) => {
  if (show) {
    // filter模式 之前选择过对应的值
    if (props.filterable && states.selectOption) {
      states.inputValue = ''
    }
    // 打开前进行一次默认选项生成
    if (props.filterable) {
      generateFilterOptions(states.inputValue)
    }
    tooltipRef.value.show()
  } else {
    tooltipRef.value.hide()
    // 失去焦点时，如果之前有选项需要回灌给input
    if (props.filterable) {
      states.inputValue = states.selectOption ? states.selectOption.label : ''
    }
    states.highlightIndex = -1
    // 执行表单验证
    runValidation('blur')
  }
  isDropdownShow.value = show
  emits('visible-change', show)
}
const handleKeydown = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'Enter':
      if (!isDropdownShow.value) {
        controlDropdown(true)
      } else {
        if (states.highlightIndex > -1 && filteredOptions.value[states.highlightIndex]) {
          itemSelect(filteredOptions.value[states.highlightIndex])
        } else {
          controlDropdown(false)
        }
      }
      break
    case 'Escape':
      if (isDropdownShow.value) {
        controlDropdown(false)
      }
      break
    case 'ArrowUp':
      e.preventDefault()
      if (filteredOptions.value.length > 0) {
        if (states.highlightIndex === -1 || states.highlightIndex === 0) {
          states.highlightIndex = filteredOptions.value.length - 1
        } else {
          states.highlightIndex--
        }
      }
      break
    case 'ArrowDown':
      e.preventDefault()
      if (filteredOptions.value.length > 0) {
        if (states.highlightIndex === -1 || states.highlightIndex === (filteredOptions.value.length - 1)) {
          states.highlightIndex = 0
        } else {
          states.highlightIndex++
        }
      }
      break
    default:
      break
  }
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
  states.inputValue = e.label
  states.selectOption = e
  emits('change', e.value)
  emits('update:modelValue', e.value)
  controlDropdown(false)
  inputRef.value.ref.focus()
}
</script>
