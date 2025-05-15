---
title: Input（输入框）
description: 用于通过键盘输入内容
---

# Input 输入框

用于通过键盘输入内容，是最基础和常用的表单组件
<small style="color: var(--utp-color-primary);text-align:right;display:block;">——该组件泛用性一般，对策性极强 (大杯)</small>

## 基本使用

使用v-model双向绑定来使用一个最基本的输入框，
<preview path="../demo/UtpInput/Basic.vue" title="基本使用" description=""></preview>

## 输入框组合

预留了四个位置prepend，append，prefix，suffix，可以通过插槽向其中插入需要的内容

<preview path="../demo/UtpInput/CustomSlot.vue" title="输入框组合" description=""></preview>

## 禁用输入框

传入disabled来禁用输入框
<preview path="../demo/UtpInput/Disabled.vue" title="禁用输入框" description=""></preview>

## 不同尺寸

三种大小，默认为中号，可通过传入size进行调整
<preview path="../demo/UtpInput/Size.vue" title="不同尺寸" description=""></preview>

## 密码输入框

通过传入showPassword可以显示和隐藏密码，需要配合type属性传入password使用
<preview path="../demo/UtpInput/ShowPassword.vue" title="密码输入框" description=""></preview>

## 一键清除

通过传入clearable属性来显示一键清除按钮
<preview path="../demo/UtpInput/Clearable.vue" title="一键清除" description=""></preview>

## 文本域

通过type属性传入textarea值来使用文本域
<preview path="../demo/UtpInput/Textarea.vue" title="文本域" description=""></preview>

## Input API

#### 属性

| 属性         | 说明                                           | 类型                                                                                           | 默认值 |
| ------------ | ---------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------ |
| type         | 设置输入框类型                                 | `string`                                                                                       | text   |
| size         | 设置选择题提示文本                             | `big` \| `small`                                                                               | —      |
| disabled     | 禁用输入框                                     | `boolean`                                                                                      | false  |
| clearable    | 开启一键清空                                   | `boolean`                                                                                      | false  |
| showPassword | 密码输入框开启查看按钮，配合password输入框使用 | `boolean`                                                                                      | false  |
| placeholder  | 设置输入框提示文本                             | `string`                                                                                       | —      |
| autocomplete | 表单自动填充特性提示(同原生input)              | [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Attributes/autocomplete)     | —      |
| autofocus    | 自动获取焦点(同原生input)                      | [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Global_attributes/autofocus) | —      |
| form         | 将控件联系到表单元素中(同原生input)            | [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/input)              | —      |
| readonly     | 只读(同原生input)                              | [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Attributes/readonly)         | —      |

#### 事件

| 事件名称 | 说明                         | 事件类型                       |
| -------- | ---------------------------- | ------------------------------ |
| input    | 输入框输入时的回调函数       | `(inputValue: string) => void` |
| change   | 输入框值修改完成时的回调函数 | `(inputValue: string) => void` |
| focus    | 输入框获得焦点时的回调函数   | `(event: FocusEvent) => void`  |
| blur     | 输入框失去焦点时的回调函数   | `(event: FocusEvent) => void`  |
| clear    | 输入框一键清除时的回调函数   | `() => void`                   |

#### Exposes

| 名称 | 说明             | 类型                                                                                                                                                                                                 |
| ---- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ref  | 输入框 html 元素 | [object：HTMLInputElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLInputElement) \| [object：HTMLTextAreaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement) |
