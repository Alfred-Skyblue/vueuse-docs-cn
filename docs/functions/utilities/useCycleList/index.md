# useCycleList

循环浏览项目列表。

## 演示

<demo src="./demo.vue" title="useCycleList" desc="循环浏览项目列表"></demo>

## 用法

```ts
import { useCycleList } from '@vueuse/core'

const { state, next, prev } = useCycleList([
  'Dog',
  'Cat',
  'Lizard',
  'Shark',
  'Whale',
  'Dolphin',
  'Octopus',
  'Seal',
])

console.log(state.value) // 'Dog'

prev()

console.log(state.value) // 'Seal'
```

## 类型

```ts
export interface UseCycleListOptions<T> {
  /**
   * 状态的初始值。可以提供 ref。
   */
  initialValue?: MaybeRef<T>
  /**
   * 默认索引时的回退值。
   */
  fallbackIndex?: number
  /**
   * 自定义函数以获取当前值的索引。
   */
  getIndexOf?: (value: T, list: T[]) => number
}
/**
 * 循环浏览项目列表
 *
 * @see https://vueuse.org/useCycleList
 */
export declare function useCycleList<T>(
  list: T[],
  options?: UseCycleListOptions<T>
): UseCycleListReturn<T>
export interface UseCycleListReturn<T> {
  state: Ref<T>
  index: Ref<number>
  next: (n?: number) => T
  prev: (n?: number) => T
}
```
