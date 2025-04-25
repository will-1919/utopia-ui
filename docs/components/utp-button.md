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

## 属性

| Name        | Description                            | Type                                                             | Default |
| ----------- | -------------------------------------- | ---------------------------------------------------------------- | ------- |
| size        | button size                            | `enum` - `'large'\| 'small'`                                     | —       |
| type        | button type                            | `enum` - `'primary'\| 'success'\| 'error'\| 'info'` | —       |
| plain       | determine whether it's a plain button  | `boolean`                                                        | false   |
| round       | determine whether it's a round button  | `boolean`                                                        | false   |
| circle      | determine whether it's a circle button | `boolean`                                                        | false   |
| loading     | determine whether it's loading         | `boolean`                                                        | false   |
| disabled    | disable the button                     | `boolean`                                                        | false   |
| icon        | icon component                         | `string`                                                         | —       |
| autofocus   | same as native button's `autofocus`    | `boolean`                                                        | false   |
| native-type | same as native button's `type`         | `enum` - `'button'\| 'submit'\| 'reset'`                         | button  |
