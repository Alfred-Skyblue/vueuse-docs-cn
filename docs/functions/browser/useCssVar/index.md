# useCssVar

响应式操纵 CSS 变量

## 演示

<demo src="./demo.vue" title="useCssVar" desc="使用 CSS 变量"></demo>


## 用法

### 基础用法

```ts
import { useCssVar } from '@vueuse/core'
const el = ref(null)
const key = '--color' // 可以传递 ref 或者 string，如果您的key不需要是响应式的，那么可以直接传递字符串
const color = useCssVar(key, el, { initialValue: 'red' })
color.value = 'blue'

window.getComputedStyle(el).getPropertyValue(key) // 'blue'
```

### 监听变化

基础的使用方法，基本上可以覆盖大部分的需求，但是如果您需要监听DOM中cssVar的属性变化，那么可以使用 `observe` 选项，它将使用 `MutationObserver` 来监听变化，此时所有使用到这个 cssVar 的地方都会被响应式修改

```ts
import { useCssVar } from '@vueuse/core'
const el = ref(null)
const key = '--color' // 可以传递 ref 或者 string，如果您的key不需要是响应式的，那么可以直接传递字符串
const color = useCssVar(key, el, { initialValue: 'red', observe: true })

el.style.setProperty(key, 'blue')

color.value // 'blue'

```
## 类型

```ts
export interface UseCssVarOptions extends ConfigurableWindow {
  /**
   * 初始值
   */
  initialValue?: string
  /**
   * 是否使用 MutationObserver 监听变化
   */
  observe?: boolean
}
/**
 * 操纵 CSS 变量。
 *
 * @see https://vueuse.org/useCssVar
 * @param prop
 * @param target
 * @param initialValue
 * @param options
 */
export declare function useCssVar(
  prop: MaybeComputedRef<string>,
  target?: MaybeElementRef,
  { window, initialValue }?: UseCssVarOptions
): Ref<string>
```
