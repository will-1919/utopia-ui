---
title: Collapse（抽屉）
description: 抽屉布局
---

# Collapse 抽屉

抽屉样式的布局
<small style="color: var(--utp-color-primary);text-align:right;display:block;">——该组件泛用性一般，对策性极强 (大杯)</small>

## 基本使用

默认可以拉开多个抽屉，每个抽屉之间互不影响；  
抽屉的标题部分支持属性传递，也支持title插槽传递，如抽屉C所示；
<preview path="../demo/UtpCollapse/Basic.vue" title="基本使用" description=""></preview>

## 锁住抽屉

通过给CollapseItem传入disabled属性锁住该抽屉
<preview path="../demo/UtpCollapse/Disabled.vue" title="锁住抽屉" description=""></preview>

## 互锁模式

通过传入accordion属性打开互锁模式
<preview path="../demo/UtpCollapse/Accordion.vue" title="锁住抽屉" description=""></preview>

## Collapse API

#### Collapse属性

| 属性                 | 说明                   | 类型                      | 默认值 |
| -------------------- | ---------------------- | ------------------------- | ------ |
| modelValue / v-model | 设置当前打开抽屉的数组 | `Array<string \| number>` | [ ]    |
| accordion            | 设置互锁模式           | `boolean`                 | false  |

#### Collapse插槽

| 插槽名  | 说明               | 子标签           |
| ------- | ------------------ | ---------------- |
| default | 抽屉项CollapseItem | `<CollapseItem>` |

#### Collapse方法

| 插槽名 | 说明               | 类型                                                 |
| ------ | ------------------ | ---------------------------------------------------- |
| change | 切换当前的活动面板 | `(values: string[] \| number[]) => void` |

## CollapseItem API

#### CollapseItem属性

| 属性  | 说明                       | 类型               | 默认值 |
| ----- | -------------------------- | ------------------ | ------ |
| name  | modelValue数组中对应的名称 | `string \| number` | —      |
| title | 设置抽屉名称               | `string`           | —      |

#### CollapseItem插槽

| 插槽名  | 说明     | 子标签 |
| ------- | -------- | ------ |
| default | 抽屉内容 | —      |
| title   | 抽屉标题 | —      |
