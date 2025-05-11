<script setup>
import UtpDropdown from '@/components/UtpDropdown/UtpDropdown.vue';
import UtpIcon from '@/components/UtpIcon/UtpIcon.vue'
import { ref, h } from 'vue';

const menuOptions = ref([
  { key: 1, label: h('h1', '这个加粗了') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
])

const test = (isOpen) => {
  console.log('isOpen', isOpen)
}
</script>

<template>
  <div>
    <utp-dropdown @visible-change="test" :menu-options="menuOptions">
      <div class="basic-menu">
        <span class="basic-menu-title">基本菜单</span>
        <utp-icon icon="fa-caret-down"></utp-icon>
      </div>
    </utp-dropdown>
  </div>
</template>

<style scoped>
.basic-menu {
  display: flex;
  align-items: center;
}

.basic-menu-title {
  margin-right: 5px;
}
</style>
