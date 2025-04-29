---
title: Icon（图标）
description: 语义化的矢量图形
---

# Icon 图标

语义化的矢量图形
<small style="color: var(--utp-color-primary);text-align:right;display:block;">——该组件泛用性极强，对策性一般 (超大杯)</small>

## 常用图标

引入了fontawesome图标库，具体图标名称请参考[fontawesome官网](https://fontawesome.com/search)
<small style="color: var(--utp-color-primary);text-align:right;display:block;">ps：不支持pro角标的图标哦，露出贫穷的微笑
(￣ω￣)</small>
<preview path="../demo/UtpIcon/Basic.vue" title="常用图标" description=""></preview>

## Icon API

支持fontawesome的所有API，另外多加了自定义的API, 有关fontawesome的API请查看官网[官方文档](https://docs.fontawesome.com/apis)，或[中文文档](https://fontawesome.com.cn/docs/v5/desktop)

#### 属性

| 属性  | 说明         | 类型                                       | 默认值 |
| ----- | ------------ | ------------------------------------------ | ------ |
| type  | 设置图标主题 | `primary` \| `success` \| `info`\| `error` | —      |
| color | 设置图标颜色 | `string`                                   | —      |
