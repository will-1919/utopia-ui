# 快速使用

最简单的介绍如何使用，让您快速上手

## 安装

使用npm安装

```
npm i @will47/utopia-ui --save
```

## 全局注册

使用全局注册的方式，后续使用组件可以直接使用，但是全局注册打包后的文件较大。

请在main.ts中添加

```ts
import UtopiaUi from '@will47/utopia-ui' // 导入UtopiaUi
import '@will47/utopia-ui/dist/es/style.css' // 引入样式文件

createApp(App).use(UtopiaUi).mount('#app') // 全局注册组件
```

然后在需要使用的组件中直接使用即可。

```vue
<template>
  <utp-button>按钮</utp-button>
</template>
```

## 按需导入

可以在组件内导入所需要的组件，但是仍然需要引入样式文件。

请在main.ts中引入样式文件

```ts
import '@will47/utopia-ui/dist/es/style.css' // 引入样式文件
```

然后在需要使用的组件中导入组件使用即可。

```vue
<script setup>
import { UtpButton } from '@will47/utopia-ui'
</script>

<template>
  <utp-button>按钮</utp-button>
</template>
```
