# useMagicKeys

响应式按下状态，支持组合键。

::: warning 注意
该功能使用 [`Proxy`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)，IE11 或更低版本不支持。
:::
## 演示

<demo src="./demo.vue" title="useMagicKeys" desc="按键监听"></demo>

### 组合键

您可以使用 `+` 或者 `_` 来组合键，例如 `Shift+Ctrl+A` 或者 `Shift_Ctrl_A`。

```ts
import { useMagicKeys } from '@vueuse/core'

const keys = useMagicKeys()
const shiftCtrlA = keys['Shift+Ctrl+A']

watch(shiftCtrlA, (v) => {
  if (v)
    console.log('按下了 Shift+Ctrl+A')
})
```
or

```ts
import { useMagicKeys } from '@vueuse/core'

const { Ctrl_A_B, space, alt_s /* ... */ } = useMagicKeys()

watch(Ctrl_A_B, (v) => {
  if (v)
    console.log('按下了 Control+A+B')
})
```
您还可以使用 `whenever` 功能

```ts
import { useMagicKeys, whenever } from '@vueuse/core'

const keys = useMagicKeys()

whenever(keys.shift_space, () => {
  console.log('按下了 Shift+Space')
})
```

### 当前按下的键

提供了一个特殊属性current来表示当前按下的所有键。

```ts
import { useMagicKeys } from '@vueuse/core'

const { current } = useMagicKeys()

console.log(current) // Set { 'control', 'a' }

whenever(
  () => current.has('a') && !current.has('b'),
  () => console.log('A is pressed but not B'),
)
```


## 键别名

```ts
import { useMagicKeys, whenever } from '@vueuse/core'

const { shift_cool } = useMagicKeys({
  aliasMap: {
    cool: 'space',
  },
})

whenever(shift_cool, () => console.log('按下了 Shift + Space'))
```
默认情况下，我们有一些[预配置的常用别名](https://github.com/vueuse/vueuse/blob/main/packages/core/useMagicKeys/aliasMap.ts)。


## 响应模式

默认情况下，`useMagicKeys()` 的值为 `Ref<boolean>` 。如果要在模板中使用该对象，可以将其设置为 `reactive`。

```vue
<script lang="ts" setup>
import { useMagicKeys } from '@vueuse/core'

const keys = useMagicKeys({ reactive: true })
</script>

<template>
  <div v-if="keys.shift">
    您正在按住 Shift 键！
  </div>
</template>
```

## 类型

```ts
export interface UseMagicKeysOptions<Reactive extends Boolean> {
  /**
   * 返回一个 reactive 对象而不是 refs 的对象
   *
   * @default false
   */
  reactive?: Reactive
  /**
   * 监听事件的目标
   *
   * @default window
   */
  target?: MaybeComputedRef<EventTarget>
  /**
   * 键的别名映射，所有键都应该是小写的
   *
   * { target: keycode }
   *
   * @example { ctrl: "control" }
   * @default <predefined-map>
   */
  aliasMap?: Record<string, string>
  /**
   * 注册监听器
   *
   * @default true
   */
  passive?: boolean
  /**
   * keydownkeyup 事件的自定义事件处理程序。当您想要应用自定义逻辑时很有用。使用 `e.preventDefault()` 时，您需要将 `passive: false` 传递给 useMagicKeys()。
   */
  onEventFired?: (e: KeyboardEvent) => void | boolean
}
export interface MagicKeysInternal {
  /**
   * 当前按下的键位的集合
   * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
   */
  current: Set<string>
}
export type UseMagicKeysReturn<Reactive extends Boolean> = Readonly<
    Omit<
        Reactive extends true
          ? Record<string, boolean>
          : Record<string, ComputedRef<boolean>>,
        keyof MagicKeysInternal
        > &
    MagicKeysInternal
    >
/**
 * 响应式按下状态，支持组合键。
 *
 * @see https://vueuse.org/useMagicKeys
 */
export declare function useMagicKeys(
  options?: UseMagicKeysOptions<false>
): UseMagicKeysReturn<false>
export declare function useMagicKeys(
  options: UseMagicKeysOptions<true>
): UseMagicKeysReturn<true>
export { DefaultMagicKeysAliasMap } from './aliasMap'
```
