# useShare

响应式 [Share API](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/share). 浏览器提供可以共享文本或文件内容的功能。

## 演示

<demo src="./demo.vue" title="useShare" desc=""></demo>

## 用法

## 基本使用方法

提供一个 `CSS` 字符串，`vueuse` 会自动生成一个 `id` 并将其注册到 `head` 中


```ts
import { useStyleTag } from '@vueuse/core'

const {
  id,
  css,
  load,
  unload,
  isLoaded,
} = useStyleTag('.foo { margin-top: 32px; }')

// Later you can modify styles
css.value = '.foo { margin-top: 64px; }'
```
