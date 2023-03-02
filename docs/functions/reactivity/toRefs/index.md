# toRefs

扩展的 [`toRefs`](https://v3.vuejs.org/api/refs-api.html#torefs) 也接受对象的引用。
## 用法

```ts
import { toRefs } from '@vueuse/core'
import { reactive, ref } from 'vue-demi'

const objRef = ref({ a: 'a', b: 0 })
const arrRef = ref(['a', 0])

const { a, b } = toRefs(objRef)
const [a, b] = toRefs(arrRef)

const obj = reactive({ a: 'a', b: 0 })
const arr = reactive(['a', 0])

const { a, b } = toRefs(obj)
const [a, b] = toRefs(arr)
```

## 用例


### 解构 props 对象

```html
<template>
  <div>
    <input v-model="a" type="text" />
    <input v-model="b" type="text" />
  </div>
</template>

<script lang="ts">
import { toRefs, useVModel } from '@vueuse/core'

export default {
  setup(props) {
    const refs = toRefs(useVModel(props, 'data'))

    console.log(refs.a.value) // props.data.a
    refs.a.value = 'a' // emit('update:data', { ...props.data, a: 'a' })

    return { ...refs }
  }
}
</script>
```

## 类型

```ts
/**
 * 扩展的`toRefs`也接受对象的引用。
 *
 * @see https://vueuse.org/toRefs
 * @param objectRef 一个 ref 或普通对象或数组。
 */
export declare function toRefs<T extends object>(
  objectRef: MaybeRef<T>
): ToRefs<T>
```
