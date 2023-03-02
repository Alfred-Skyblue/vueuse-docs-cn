# 介绍

该文档是 VueUse 的中文文档，如需查看官方文档，请访问 [vueuse](https://vueuse.org/) 。文档中涉及所有 `demo` 均来自于 `VueUse` 官方。项目中使用的 `css` 样式来自于 [`unocss`](https://github.com/unocss/unocss) 。

## 开始

`VueUse` 是一组基于 [Composition API](https://cn.vuejs.org/guide/extras/composition-api-faq.html) 的 `Hooks` 工具集，在查阅文档之前，我们假设您已经熟悉了[Composition API 的基本概念](https://cn.vuejs.org/guide/extras/composition-api-faq.html)。

## 安装

> 从 v4.0 开始，它通过 vue-demi 的加持，可以在 Vue 2 和 Vue 3 中使用。

> 从 v6.0 开始，VueUse 要求 vue>= v3.2 或@vue/composition-api>= v1.1

### npm

```bash
npm i @vueuse/functions
```

### cdn

```html
<script src="https://unpkg.com/@vueuse/shared"></script>
<script src="https://unpkg.com/@vueuse/core"></script>
```

### Nuxt

> 从 v7.2.0 开始，我们发布了一个 Nuxt 模块来适配 Nuxt 3 和 Nuxt Bridge 的自动导入。

```bash
npm i -D @vueuse/nuxt @vueuse/functions
```

- Nuxt 3

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt'],
})
```

- Nuxt 2

```ts
// nuxt.config.js
export default {
  buildModules: ['@vueuse/nuxt'],
}
```

然后在你的 Nuxt 应用程序的任何地方使用 VueUse 函数。例如：

```vue
<script setup lang="ts">
import { useMouse } from '@vueuse/core'
const { x, y } = useMouse()
</script>

<template>
  <div>pos: {{ x }}, {{ y }}</div>
</template>
```

## 演示

- [Vite + Vue 3](https://github.com/vueuse/vueuse-vite-starter)
- [Nuxt3 + Vue 3](https://github.com/antfu/vitesse-nuxt3)
- [Nuxt2 + Vue 2](https://github.com/antfu/vitesse-nuxt-bridge)
- [Webpack + Vue3](https://github.com/vueuse/vueuse-vue3-example)
- [Vue CLI + Vue2](https://github.com/vueuse/vueuse-vue2-example)

## 使用

只需从中导入您需要的功能 `@vueuse/core`

```ts
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'

export default {
  setup() {
    // 跟踪鼠标位置
    const { x, y } = useMouse()

    // 用户是否喜欢深色主题
    const isDark = usePreferredDark()

    // 响应式获取 localStorage 中持久化的状态
    const store = useLocalStorage('my-storage', {
      name: 'Apple',
      color: 'red',
    })

    return { x, y, isDark, store }
  },
}
```
