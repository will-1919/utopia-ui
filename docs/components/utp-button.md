---
title: Button（按钮）
description: 用于触发即时操作
---

# Button 按钮

用于触发即时操作
<small style="color: var(--utp-color-primary);text-align:right;display:block;">——该组件泛用性极强，对策性一般 (超大杯)</small>

## 快速使用

按钮有五种主题primary、success、info、error、text，默认为primary，可使用属性type更改；  
传入plain属性可变更为镂空风格；
<preview path="../demo/UtpButton/Basic.vue" title="快速使用" description=""></preview>

## 不同形状

除了默认的举行按钮之外，也支持椭圆形按钮和圆形按钮
<preview path="../demo/UtpButton/shape.vue" title="不同形状" description=""></preview>

## 不同大小

有三种大小，默认为中号
<preview path="../demo/UtpButton/size.vue" title="不同大小" description=""></preview>

## 是否禁用

可以使用disabled来控制按钮是否禁用
<preview path="../demo/UtpButton/disabled.vue" title="禁用" description=""></preview>

## 图标与加载

按钮支持fontawesome风格图标，并且支持加载状态，加载状态按钮为disabled
<preview path="../demo/UtpButton/icon.vue" title="图标与加载" description=""></preview>

## Button API

#### 属性

| 属性        | 说明                          | 类型                                                                        | 默认值  |
| ----------- | ----------------------------- | --------------------------------------------------------------------------- | ------- |
| type        | 设置按钮主题                  | `primary` \| `success` \| `info`\| `error`\| `text`                         | primary |
| plain       | 镂空按钮状态                  | `boolean`                                                                   | false   |
| size        | 设置按钮大小                  | `small` \| `middle` \| `big`                                                | middle  |
| round       | 椭圆形按钮状态                | `boolean`                                                                   | false   |
| circle      | 圆形按钮状态                  | `boolean`                                                                   | false   |
| loading     | 载入中按钮状态                | `boolean`                                                                   | false   |
| disabled    | 禁用按钮状态                  | `boolean`                                                                   | false   |
| icon        | 设置按钮图标                  | `string` - [https://fontawesome.com/search](https://fontawesome.com/search) | —       |
| autofocus   | 同原生button属性：`autofocus` | `boolean`                                                                   | false   |
| native-type | 同原生button属性：`type`      | `button`\| `submit`\| `reset`                                               | button  |

#### 事件

| 事件名称 | 说明             | 事件类型      |
| -------- | ---------------- | ------------- |
| click    | 点击按钮时的回调 | `(e) => void` |

#### Exposes

| 名称 | 说明           | 类型                                                                                            |
| -------- | -------------- | ----------------------------------------------------------------------------------------------- |
| ref      | 按钮 html 元素 | [object：HTMLButtonElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLButtonElement) |
