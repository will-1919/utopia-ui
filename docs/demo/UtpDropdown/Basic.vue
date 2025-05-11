<script setup>
import UtpDropdown from '@/components/UtpDropdown/UtpDropdown.vue';
import UtpIcon from '@/components/UtpIcon/UtpIcon.vue'
import { ref, h } from 'vue';

const menuOptions = ref([
  { key: 1, label: 'item-a' },
  { key: 2, label: 'item-b', disabled: true },
  { key: 3, label: h('i', { style: { fontWeight: 'bold' } }, 'item-c') },
  { key: 4, label: 'item-d', divided: true }
])

const toolTipVisible = ref(false)
const iconType = ref('')
const visibleChange = (visible) => {
  toolTipVisible.value = visible
  if(visible) {
    iconType.value = 'primary'
  } else {
    iconType.value = ''
  }
}
</script>

<template>
  <div>
    <utp-dropdown @visible-change="visibleChange" :menu-options="menuOptions">
      <div class="basic-menu" :class="{ 'basic-menu-active': toolTipVisible }">
        <span class="basic-menu-title">基本菜单</span>
        <utp-icon :type="iconType" icon="fa-caret-down"></utp-icon>
      </div>
    </utp-dropdown>
  </div>
</template>

<style scoped>
.basic-menu {
  display: flex;
  align-items: center;

  .basic-menu-title {
    margin-right: 5px;
  }
}

.basic-menu-active {
  .basic-menu-title {
    color: #F15A7C;
  }
}
</style>
