# reactivePick

响应式的从响应式对象中选择字段。

## 用法

```js
import { reactivePick } from '@vueuse/core'

const obj = reactive({
  x: 0,
  y: 0,
  elementX: 0,
  elementY: 0,
})

const picked = reactivePick(obj, 'x', 'elementX') // { x: number, elementX: number }
```

### 场景

#### 选择性地将道具传递给子组件

```html
<script setup>
import { reactivePick } from '@vueuse/core'

const props = defineProps({
  value: {
    default: 'value',
  },
  color: {
    type: String,
  },
  font: {
    type: String,
  }
})

const childProps = reactivePick(props, 'color', 'font')
</script>

<template>
  <div>
    <!-- 仅将“颜色”和“字体”道具传递给子组件 -->
    <ChildComp v-bind="childProps" />
  </div>
</template>
```

#### 有选择地包装反应对象

而不是这样做

```ts
import { reactive } from 'vue'
import { useElementBounding } from '@vueuse/core'

const { height, width } = useElementBounding() // object of refs
const size = reactive({ height, width })
```

现在我们可以拥有这个

```ts
import { reactivePick, useElementBounding } from '@vueuse/core'

const size = reactivePick(useElementBounding(), 'height', 'width')
```

## 类型

```ts
/**
 * 响应式的从响应式对象中选择字段
 *
 * @see https://vueuse.org/reactivePick
 */
export declare function reactivePick<T extends object, K extends keyof T>(
  obj: T,
  ...keys: (K | K[])[]
): {
  [S in K]: UnwrapRef<T[S]>
}
```
