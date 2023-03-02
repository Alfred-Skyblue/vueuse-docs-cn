# reactify

将普通函数转换为响应式函数。转换后的函数接受 `refs` 作为其参数，并返回一个具有正确类型的 `ComputedRef`。


## 用法

### 基础使用

```ts
import { reactify } from '@vueuse/core'

// 创建一个函数
function add(a: number, b: number): number {
  return a + b
}

// 现在它接受 refs 并返回一个 computedRef
// (a: number | Ref<number>, b: number | Ref<number>) => ComputedRef<number>
const reactiveAdd = reactify(add)

const a = ref(1)
const b = ref(2)
const sum = reactiveAdd(a, b)

console.log(sum.value) // 3

a.value = 5

console.log(sum.value) // 7
```

一个实现响应式勾股定理的例子。


```ts
import { reactify } from '@vueuse/core'

const pow = reactify(Math.pow)
const sqrt = reactify(Math.sqrt)
const add = reactify((a: number, b: number) => a + b)

const a = ref(3)
const b = ref(4)
const c = sqrt(add(pow(a, 2), pow(b, 2)))
console.log(c.value) // 5

// 5:12:13
a.value = 5
b.value = 12
console.log(c.value) // 13
```
您也可以这样做：

```ts
import { reactify } from '@vueuse/core'

function pythagorean(a: number, b: number) {
  return Math.sqrt(a ** 2 + b ** 2)
}

const a = ref(3)
const b = ref(4)

const c = reactify(pythagorean)(a, b)
console.log(c.value) // 5
```

使用响应式 `JSON.stringify`：

```ts
import { reactify } from '@vueuse/core'

const stringify = reactify(JSON.stringify)

const obj = ref(42)
const dumped = stringify(obj)

console.log(dumped.value) // '42'

obj.value = { foo: 'bar' }

console.log(dumped.value) // '{"foo":"bar"}'
```


## 类型

```ts
export type Reactified<T, Computed extends boolean> = T extends (
  ...args: infer A
) => infer R
  ? (
      ...args: {
        [K in keyof A]: Computed extends true
          ? MaybeComputedRef<A[K]>
          : MaybeRef<A[K]>
      }
    ) => ComputedRef<R>
  : never
export interface ReactifyOptions<T extends boolean> {
  /**
   * 接受将函数作为响应式 getter 传递的参数
   *
   * @default true
   */
  computedGetter?: T
}
/**
 * 将普通函数转换为响应式函数
 *
 * @param fn - Source function
 */
export declare function reactify<T extends Function, K extends boolean = true>(
  fn: T,
  options?: ReactifyOptions<K>
): Reactified<T, K>
export { reactify as createReactiveFn }
```
