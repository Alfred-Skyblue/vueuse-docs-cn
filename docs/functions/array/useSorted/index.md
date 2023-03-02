# useSorted

响应式数组排序

## 演示

<demo src="./demo.vue" title="useSorted" desc="响应式数组排序"></demo>
## 用法

```ts
import { useSorted } from '@vueuse/core'

// 一般排序
const source = [10, 3, 5, 7, 2, 1, 8, 6, 9, 4]
const sorted = useSorted(source)
console.log(sorted.value) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(source) // [10, 3, 5, 7, 2, 1, 8, 6, 9, 4]

// 对象排序
const objArr = [{
  name: 'John',
  age: 40,
}, {
  name: 'Jane',
  age: 20,
}, {
  name: 'Joe',
  age: 30,
}, {
  name: 'Jenny',
  age: 22,
}]
const objSorted = useSorted(objArr, (a, b) => a.age - b.age)
```
### 脏模式

脏模式会修改原数组

```ts
const source = ref([10, 3, 5, 7, 2, 1, 8, 6, 9, 4])
const sorted = useSorted(source, (a, b) => a - b, {
  dirty: true,
})
console.log(source)// output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```


## 类型

```ts
export type UseSortedCompareFn<T = any> = (a: T, b: T) => number
export type UseSortedFn<T = any> = (
  arr: T[],
  compareFn: UseSortedCompareFn<T>
) => T[]
export interface UseSortedOptions<T = any> {
  /**
   * 排序函数
   */
  sortFn?: UseSortedFn<T>
  /**
   * 比较器
   */
  compareFn?: UseSortedCompareFn<T>
  /**
   * 脏模式，会修改原数组
   * @default false
   */
  dirty?: boolean
}
export declare function useSorted<T = any>(
  source: MaybeRef<T[]>,
  compareFn?: UseSortedCompareFn<T>
): Ref<T[]>
export declare function useSorted<T = any>(
  source: MaybeRef<T[]>,
  options?: UseSortedOptions<T>
): Ref<T[]>
export declare function useSorted<T = any>(
  source: MaybeRef<T[]>,
  compareFn?: UseSortedCompareFn<T>,
  options?: Omit<UseSortedOptions<T>, 'compareFn'>
): Ref<T[]>
```
