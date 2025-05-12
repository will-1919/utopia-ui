---
title: Switch（开关）
description: 用于两种状态之间切换
---

# Switch 开关

用于两种状态之间切换，表达两种不同的状态。
<small style="color: var(--utp-color-primary);text-align:right;display:block;">——该组件泛用性一般，对策性极强 (中杯)</small>

## 基本使用

使用v-model双向绑定，可以通过activeText和inactiveText传入提示文本，不传则默认不显示提示文本
<preview path="../demo/UtpSwitch/Basic.vue" title="基本使用" description=""></preview>

## 三种大小

开关组件有三种不同的大小
<preview path="../demo/UtpSwitch/Size.vue" title="不同大小" description=""></preview>

## 禁用开关

通过disabled属性对开关实现禁用
<preview path="../demo/UtpSwitch/Disabled.vue" title="禁用" description=""></preview>

## Switch API

#### 属性

| 属性          | 说明                   | 类型                              | 默认值 |
| ------------- | ---------------------- | --------------------------------- | ------ |
| modelValue    | 设置开关双向绑定值     | `boolean` \| `string` \| `number` | —      |
| activeValue   | 设置开关激活value      | `boolean` \| `string` \| `number` | true   |
| inActiveValue | 设置开关未激活value    | `boolean` \| `string` \| `number` | false  |
| disabled      | 禁用开关               | `boolean`                         | false  |
| activeText    | 设置开关激活提示文本   | `string`                          | —      |
| inactiveText  | 设置开关未激活提示文本 | `string`                          | —      |
| name          | 设置开关表单提交名称   | `number`                          | —      |
| size          | 设置开关大小           | `number`                          | —      |

#### 事件

| 事件名称 | 说明                 | 事件类型                                             |
| -------- | -------------------- | ---------------------------------------------------- |
| change   | 开关状态切换回调函数 | `(switchValue: boolean \| string \| number) => void` |
