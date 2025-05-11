---
title: Dropdown（下拉菜单）
description: 折叠式列表
---

# Dropdown 下拉菜单

一个折叠式的列表，基于UtpTooltip组件编写，支持UtpTooltip组件部分属性
<small style="color: var(--utp-color-primary);text-align:right;display:block;">——该组件泛用性一般，对策性极强 (大杯)</small>

## 基本使用

传入一个MenuOptions对象的数组来构成菜单，MenuOptions属性请参考下方表格；  
可以通过MenuOptions对象中传入divided来进行菜单分组；  
可以通过MenuOptions对象中传入disabled来进行对某一选项的禁用；  
菜单支持Vnode函数传入；
<preview path="../demo/UtpDropdown/Basic.vue" title="基本使用" description=""></preview>

## Dropdown API

#### 属性

| 属性          | 说明                 | 类型                         | 默认值 |
| ------------- | -------------------- | ---------------------------- | ------ |
| menuOptions   | 设置菜单数组         | `MenuOptions[]`              | hover  |
| trigger       | 设置提示文本触发方式 | `hover` \| `click`           | hover  |
| placement     | 设置提示文本显示方向 | `Placement: 参考ToolTip组件` | bottom |
| manual        | 设置手动模式         | `boolean`                    | false  |
| popperOptions | popperJs配置项       | `object`                     | —      |
| openDelay     | 设置显示延迟时间     | `number`                     | 0      |
| closeDelay    | 设置隐藏延迟时间     | `number`                     | 0      |

#### MenuOptions对象属性

| 属性     | 说明         | 类型                 | 默认值 |
| -------- | ------------ | -------------------- | ------ |
| label    | 选项名称     | `string` \| `VNode`  | —      |
| key      | 选项key      | `string` \| `number` | —      |
| disabled | 是否禁用选项 | `boolean`            | false  |
| divided  | 是否分组     | `boolean`            | false  |

#### 事件

| 事件名称       | 说明                   | 事件类型                      |
| -------------- | ---------------------- | ----------------------------- |
| visible-change | 切换显示状态的回调函数 | `(visible: boolean) => void`  |
| select         | 点击菜单选项的回调函数 | `(item: MenuOptions) => void` |

#### Exposes

| 名称 | 说明             | 类型         |
| ---- | ---------------- | ------------ |
| show | 显示菜单的方法 | `() => void` |
| hide | 隐藏菜单的方法 | `() => void` |
