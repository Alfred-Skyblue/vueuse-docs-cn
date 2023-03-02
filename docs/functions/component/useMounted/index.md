# useMounted

组件挂载状态

## 演示


<demo src="./demo.vue" title="useMounted" desc="组件挂载状态"></demo>

## 用法

```ts
import { useMounted } from '@vueuse/core'

const isMounted = useMounted()
```

这本质上是以下内容的简写：

```ts
const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
```


## 类型

```ts
/**
 * 组件挂载状态
 *
 * @see https://vueuse.org/useMounted
 * @param options
 */
export declare function useMounted(): Ref<boolean>
```
