---
title: Tooltip（文本提示）
description: 用于以各种方式展示提示文本
---

# Tooltip 文本提示

用于以各种方式展示提示文本
<small style="color: var(--utp-color-primary);text-align:right;display:block;">——该组件泛用性一般，对策性极强 (大杯)</small>

## 基本使用

该组件是基于popperjs插件的二次封装，支持popperjs的所有配置（通过popperOptions传入），popperjs说明具体可查看[popperjs官网](https://popper.js.org/docs/v2/)；  
有9个基本方向可供提示文本展示，并可以传入trigger属性切换触发方式；
<preview path="../demo/UtpTooltip/Basic.vue" title="基本使用" description=""></preview>

## popperjs配置

修改popperjs配置示例，同时传入placement和options中的placement时，options的级别更高
<preview path="../demo/UtpTooltip/PopperJsOp.vue" title="popperjs配置" description=""></preview>

## 自定义显示内容

通过content插槽自定义显示内容的样式
<preview path="../demo/UtpTooltip/Content.vue" title="自定义提示内容" description=""></preview>

## 支持手动控制触发和关闭

通过content插槽自定义显示内容的样式
<preview path="../demo/UtpTooltip/Manual.vue" title="手动" description=""></preview>

## Tooltip API

#### 属性

| 属性          | 说明                     | 类型                          | 默认值 |
| ------------- | ------------------------ | ----------------------------- | ------ |
| content       | 设置提示文本内容         | `string`                      | —      |
| trigger       | 设置提示文本触发方式     | `hover` \| `click`            | hover  |
| placement     | 设置提示文本显示方向     | `Placement: 参考基本使用部分` | bottom |
| manual        | 设置手动模式             | `boolean`                     | false  |
| popperOptions | popperJs配置项           | `object`                      | —      |
| transition    | 设置动画(一般不需要传入) | `string`                      | fade   |
| openDelay     | 设置显示延迟时间         | `number`                      | 0      |
| closeDelay    | 设置隐藏延迟时间         | `number`                      | 0      |

#### 事件

| 事件名称       | 说明                   | 事件类型                     |
| -------------- | ---------------------- | ---------------------------- |
| visible-change | 切换显示状态的回调函数 | `(isOpen: boolean) => void`  |
| click-outside  | 点击其他地方的回调函数 | `(isClick: boolean) => void` |

#### Exposes

| 名称 | 说明             | 类型         |
| ---- | ---------------- | ------------ |
| show | 显示文本提示方法 | `() => void` |
| hide | 隐藏文本提示方法 | `() => void` |
