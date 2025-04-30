---
title: Message（消息）
description: 全局展示操作反馈信息
---

# Message 消息弹窗

全局展示操作反馈信息
<small style="color: var(--utp-color-primary);text-align:right;display:block;">——该组件泛用性极强，对策性一般 (超大杯)</small>

## 基本使用

通过调用createMessage方法创建消息弹窗，3s后自动销毁。支持传入文本与Vnode。
<preview path="../demo/UtpMessage/Basic.vue" title="基本使用" description=""></preview>

## 不同的提示类型

可以通过传入type属性，提示主要，成功，错误以及不重要信息
<preview path="../demo/UtpMessage/Type.vue" title="不同类型" description=""></preview>

## 可以关闭的提示

默认的消息弹窗没有关闭按钮，可以传入showClose属性展示关闭按钮。如果想要消息弹窗不自动消失，可以设置duration为0
<preview path="../demo/UtpMessage/ShowClose.vue" title="可以关闭的提示" description=""></preview>

## 关闭全部消息

调用创建消息后，可以通过closeAll函数手动关闭所有已经生成的消息实例
<preview path="../demo/UtpMessage/CloseAll.vue" title="不同类型" description=""></preview>

## Message API

#### 函数

| 函数名称            | 说明                                 | 类型                                 |
| ------------------- | ------------------------------------ | ------------------------------------ |
| createMessage       | 创建Message实例                      | `(Message可接收参数) => Message实例` |
| getLastInstance     | 获取最后一个消息组件对应的实例       | `() => Message实例\|undefined`       |
| getLastBottomOffset | 获取传入组件的上一个组件底部位置信息 | `(id: string) => number`             |
| closeAll            | 销毁所有的消息                       | `() => void`                         |

#### Message可接收参数

| 属性     | 说明                   | 类型                                       | 默认值  |
| -------- | ---------------------- | ------------------------------------------ | ------- |
| message  | 设置消息内容           | `string` \| `Vnode`                        | —       |
| type     | 设置消息类型           | `primary` \| `success` \| `info`\| `error` | primary |
| duration | 设置消息展示时间       | `number`                                   | 3000    |
| offset   | 设置消息实例之间的间隔 | `number`                                   | 20      |

#### Message实例

| 属性    | 说明                                      | 类型                        |
| ------- | ----------------------------------------- | --------------------------- |
| id      | 消息实例ID                                | `string`                    |
| vnode   | 消息实例的Vnode对象                       | `VNode`                     |
| vm      | 消息实例的Vnode所表示的组件的内部实例对象 | `ComponentInternalInstance` |
| props   | 消息组件接受的参数                        | `Object`                    |
| destory | 消息组件销毁，并删除实例数组中对应的实例  | `() => void`                |
