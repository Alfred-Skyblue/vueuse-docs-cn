# useVModels

props v-model 绑定的简写。把它想象成 `toRefs(props)` 但变化也会触发更新。

## 用法

```ts
import { useVModels } from '@vueuse/core'

export default {
  props: {
    foo: String,
    bar: Number,
  },
  setup(props, { emit }) {
    const { foo, bar } = useVModels(props, emit)

    console.log(foo.value) // props.foo
    foo.value = 'foo' // emit('update:foo', 'foo')
  },
}
```

## 类型

```ts
/**
 * props v-model 绑定的简写。把它想象成 `toRefs(props)` 但变化也会触发更新。
 *
 * @see https://vueuse.org/useVModels
 * @param props
 * @param emit
 */
export declare function useVModels<P extends object, Name extends string>(
  props: P,
  emit?: (name: Name, ...args: any[]) => void,
  options?: UseVModelOptions<any>
): ToRefs<P>
```
