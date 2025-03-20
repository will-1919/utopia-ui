<template>
  <div class="utp-dropdown">
    <utp-tooltip :trigger="trigger" :placement="placement" :popper-options="popperOptions" :open-delay="openDelay"
      :close-delay="closeDelay" @visible-change="visibleChange" ref="tooltipRef">
      <slot>

      </slot>
      <template #content>
        <ul class="utp-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li v-if="item.divided" role="separator" class="divided-placeholder"></li>
            <li @click="itemClick(item)" class="utp-dropdown__item"
              :class="{ 'is-disabled': item.disabled, 'is-divided': item.divided }">{{
                item.label }}</li>
          </template>
        </ul>
      </template>
    </utp-tooltip>
  </div>
</template>
<script setup lang="ts">
import UtpTooltip from '../UtpTooltip/UtpTooltip.vue';
import type { UtpDropdownProps, UtpDropdownEmits, UtpDropdownInstance, MenuOptions } from './types';
import type { TooltipInstance } from '../UtpTooltip/types';
import { ref } from 'vue'

const props = defineProps<UtpDropdownProps>()
const emits = defineEmits<UtpDropdownEmits>()
const tooltipRef = ref<TooltipInstance>()
const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}
const itemClick = (e: MenuOptions) => {
  if (e.disabled) {
    return
  }
  emits('select', e)
}
defineExpose<UtpDropdownInstance>({
  'show': open,
  'hide': close
})
</script>
