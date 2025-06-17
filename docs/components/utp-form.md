---
title: Form（表单）
description: 用于收集、验证和提交信息
---

# Form 表单

包含数据录入、校验以及对应样式。

## 基本使用

基本的注册表单，验证模块使用async-validator，验证规则请查看[第三方github](https://github.com/yiminghe/async-validator)
<preview path="../demo/UtpForm/Basic.vue" title="基本使用" description=""></preview>

## Form API

#### 属性

| 属性  | 说明           | 类型        | 默认值 |
| ----- | -------------- | ----------- | ------ |
| model | 表单绑定的内容 | `Object`    | —      |
| rules | 表单验证规则   | `FormRules` | —      |

#### FormRules验证对象

格式为`Record<string, FormItemRule[]>`，`FormItemRule`为Object继承自[RuleItem](https://github.com/yiminghe/async-validator)添加了非必要字符串属性`trigger`。

#### Exposes

| 名称         | 说明           | 类型                 |
| ------------ | -------------- | -------------------- |
| validate     | 验证整个表单   | `() => Promise<any>` |
| resetFields  | 初始化整个表单 | `() => void`         |
| clearValidta | 清空验证       | `() => void`         |

## FormItem API

| 属性  | 说明           | 类型     | 默认值 |
| ----- | -------------- | -------- | ------ |
| label | 表单项提示文本 | `string` | —      |
| prop  | 表单项验证字典 | `string` | —      |

#### Exposes

| 名称           | 说明               | 类型                                |
| -------------- | ------------------ | ----------------------------------- |
| validateStatus | 当前表单项验证状态 | `ValidateStatusProp`                |
| validate       | 初始化整个表单     | `(tigger?: string) => Promise<any>` |
| resetField     | 清空验证           | `() => void`                        |
| clearValidta   | 清空验证           | `() => void`                        |

#### ValidateStatusProp 属性

| 属性     | 说明           | 类型                           | 默认值 |
| -------- | -------------- | ------------------------------ | ------ |
| state    | 表单项提示文本 | `init` \| `success` \| `error` | `init` |
| errorMsg | 表单项验证字典 | `string`                       | ''     |
| loading  | 表单项验证字典 | `boolean`                      | false  |
