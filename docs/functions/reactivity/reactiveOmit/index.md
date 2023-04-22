# reactiveOmit

响应式的从响应式对象中省略字段。

## 用法

```js
import { reactiveOmit } from '@vueuse/core'

const obj = reactive({
  x: 0,
  y: 0,
  elementX: 0,
  elementY: 0,
})

const picked = reactiveOmit(obj, 'x', 'elementX') // { y: number, elementY: number }
```

### 谓词用法

```ts
import { reactiveOmit } from '@vueuse/core'

const obj = reactive({
  bar: 'bar',
  baz: 'should be omit',
  foo: 'foo2',
  qux: true,
})

const picked = reactiveOmit(obj, (key, value) => key === 'baz' || value === true)
// { bar: string, foo: string }
```

### 场景

#### 选择性地将道具传递给子组件


```html
<script setup>
import { reactiveOmit } from '@vueuse/core'

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

const childProps = reactiveOmit(props, 'value')
</script>

<template>
  <div>
    <!-- 仅将“颜色”和“字体”道具传递给子组件 -->
    <ChildComp v-bind="childProps" />
  </div>
</template>
```

## 类型

```ts
/**
 * 响应式的从响应式对象中省略字段
 *
 * @see https://vueuse.org/reactiveOmit
 */
export declare function reactiveOmit<T extends object, K extends keyof T>(
  obj: T,
  ...keys: (K | K[])[]
): Omit<T, K>
```
