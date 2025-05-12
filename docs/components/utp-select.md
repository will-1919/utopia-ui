---
title: Select（选择器）
description: 下拉式选择器
---

# Select 选择器

下拉式选择器，常常用于单选选项  
<small style="color: var(--utp-color-primary);text-align:right;display:block;">——该组件泛用性一般，对策性极强 (大杯)</small>

## 基本使用

通过options传入选项列表，并使用v-model双向绑定当前选中的值，即可实现最简单的单选组件
<preview path="../demo/UtpSelect/Basic.vue" title="基本使用" description=""></preview>

## 禁用状态

通过传入disabled来禁用选择器
<preview path="../demo/UtpSelect/Disabled.vue" title="禁用" description=""></preview>

## 一键清空

通过传入clearable来显示清除按钮
<preview path="../demo/UtpSelect/Clearable.vue" title="清空" description=""></preview>

## 自定义选项样式

通过renderLabel属性传入一个函数来自定义选项
<preview path="../demo/UtpSelect/RenderLabel.vue" title="自定义选项" description=""></preview>

## 快捷搜索

通过传入filterable属性来开启快捷搜索
<preview path="../demo/UtpSelect/Filterable.vue" title="快捷搜索" description=""></preview>

## 远程筛选

支持通过远程搜索从服务器中查找数据，需要传入filterable，remote和remoteMethod
<preview path="../demo/UtpSelect/Remote.vue" title="远程筛选" description=""></preview>

## Select API

#### 属性

| 属性         | 说明                                           | 类型                                          | 默认值 |
| ------------ | ---------------------------------------------- | --------------------------------------------- | ------ |
| options      | 设置选择器选项列表                             | `Array<SelectOptions>`                        | [ ]    |
| placeholder  | 设置选择题提示文本                             | `string`                                      | —      |
| disabled     | 禁用选择器                                     | `boolean`                                     | false  |
| clearable    | 开启一键清空                                   | `boolean`                                     | false  |
| renderLabel  | 设置选择器选项自定义函数                       | `(option: SelectOptions) => VNode`            | —      |
| filterable   | 开启快捷搜索                                   | `boolean`                                     | false  |
| filterMethod | 设置快捷搜索方法，配合filterable使用           | `(value: string) => SelectOptions[]`          | —      |
| remote       | 开启远端搜索，配合filterable和remoteMethod使用 | `boolean`                                     | false  |
| remoteMethod | 设置远端搜索方法，配合filterable和remote使用   | `(value: string) => Promise<SelectOptions[]>` | —      |

#### SelectOptions对象属性

| 属性     | 说明         | 类型                 | 默认值 |
| -------- | ------------ | -------------------- | ------ |
| label    | 选项名称     | `string`             | —      |
| value    | 选项值       | `string` \| `number` | —      |
| disabled | 是否禁用选项 | `boolean`            | false  |

#### 事件

| 事件名称       | 说明                       | 事件类型                                  |
| -------------- | -------------------------- | ----------------------------------------- |
| visible-change | 切换显示状态时的回调函数   | `(visibleValue: boolean) => void`         |
| change         | 切换选中的选项时的回调函数 | `(selectValue: string \| number) => void` |
| clear          | 点击清除按钮时的回调函数   | `() => void`                              |
