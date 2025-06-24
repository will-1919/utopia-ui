<template>
  <div class="utp-dropdown">
    <utp-tooltip :trigger="trigger" :placement="placement" :popper-options="popperOptions" :open-delay="openDelay"
      :close-delay="closeDelay" :manual="manual" @visible-change="visibleChange" ref="tooltipRef">
      <slot>

      </slot>
      <template #content>
        <ul class="utp-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li v-if="item.divided" role="separator" class="divided-placeholder"></li>
            <li @click="itemClick(item)" class="utp-dropdown__item"
              :class="{ 'is-disabled': item.disabled, 'is-divided': item.divided }">
              <render-vnode :v-node="item.label"></render-vnode>
            </li>
          </template>
        </ul>
      </template>
    </utp-tooltip>
  </div>
</template>
<script setup lang="ts">
import UtpTooltip from '../UtpTooltip/UtpTooltip.vue';
import RenderVnode from '../Common/RenderVnode';
import type { UtpDropdownProps, UtpDropdownEmits, UtpDropdownInstance, MenuOptions } from './types';
import type { TooltipInstance } from '../UtpTooltip/types';
import { ref } from 'vue'

defineOptions({
  name: 'UtpDropdown'
})
const props = withDefaults(defineProps<UtpDropdownProps>(), { hideAfterClick: true, openDelay: 100, closeDelay: 100 })
const emits = defineEmits<UtpDropdownEmits>()
const tooltipRef = ref<TooltipInstance | null>(null)
const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}
const itemClick = (e: MenuOptions) => {
  if (e.disabled) {
    return
  }
  emits('select', e)
  if (props.hideAfterClick) {
    tooltipRef.value?.hide()
  }
}
defineExpose<UtpDropdownInstance>({
  show: () => tooltipRef.value?.show(),
  hide: () => tooltipRef.value?.hide()
})
</script>
