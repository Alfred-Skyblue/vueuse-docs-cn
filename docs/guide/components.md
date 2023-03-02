# 组件

在 v5.0 中，我们引入了一个新包，`@vueuse/components` 提供可组合函数的无渲染组件版本。

## 安装

```bash
npm i @vueuse/functions @vueuse/components
```

## 使用

以 `onClickOutside` 为例，我们使用 hooks 方式使用它：

```vue
<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const el = ref()

function close() {
  /* ... */
}

onClickOutside(el, close)
</script>

<template>
  <div ref="el">
    Click Outside of Me
  </div>
</template>
```

使用组件方式：

```vue
<script setup>
import { OnClickOutside } from '@vueuse/components'

function close() {
  /* ... */
}
</script>

<template>
  <OnClickOutside @trigger="close">
    <div>Click Outside of Me</div>
  </OnClickOutside>
</template>
```

### 返回值

你可以使用插槽获取到返回值

```vue
<UseMouse v-slot="{ x, y }">
  x: {{ x }}
  y: {{ y }}
</UseMouse>
```

```vue
<UseDark v-slot="{ isDark, toggleDark }">
  <button @click="toggleDark()">
    Is Dark: {{ isDark }}
  </button>
</UseDark>
```
