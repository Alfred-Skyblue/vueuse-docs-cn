# useElementByPoint

操作元素偏点

## 演示

<demo src="./demo.vue" title="useElementByPoint" desc=""></demo>


## 用法

```ts
import { useElementByPoint, useMouse } from '@vueuse/core'

const { x, y } = useMouse({ type: 'client' })
const { element } = useElementByPoint({ x, y })
```
## 类型

```ts
export interface UseElementByPointOptions extends ConfigurableDocument {
  x: MaybeComputedRef<number>
  y: MaybeComputedRef<number>
}
/**
 * 操作元素偏点.
 *
 * @see https://vueuse.org/useElementByPoint
 * @param options - UseElementByPointOptions
 */
export declare function useElementByPoint(options: UseElementByPointOptions): {
  isActive: Readonly<Ref<boolean>>
  pause: Fn
  resume: Fn
  element: Ref<HTMLElement | null>
}
export type UseElementByPointReturn = ReturnType<typeof useElementByPoint>
```
