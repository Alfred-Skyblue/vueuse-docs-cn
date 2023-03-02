# refThrottled

节流 ref 值


## 演示

<demo src="./demo.vue" title="refThrottled" desc="节流 ref 值"></demo>


## 用法

```js
import { refThrottled } from '@vueuse/core'

const input = ref('')
const throttled = refThrottled(input, 1000)
```

### Trailing

结束前更新，如果您不想使用此选项，请设置第三个参数false（true默认情况下）：

```js
import { refThrottled } from '@vueuse/core'

const input = ref('')
const throttled = refThrottled(input, 1000, false)
```

### Leading

允许立即调用回调（在超时的前沿）。如果您不想要这种行为，请设置第 4 个参数false（true默认情况下）：

```js
import { refThrottled } from '@vueuse/core'

const input = ref('')
const throttled = refThrottled(input, 1000, undefined, false)
```

## 类型

```ts
/**
 * 节流 ref 值
 *
 * @param value Ref 值 to throttle
 * @param  delay 节流时间
 * @param [trailing=true] 最后一次更新后调用
 * @param [leading=true] 超时前调用
 */
export declare function refThrottled<T>(
  value: Ref<T>,
  delay?: number,
  trailing?: boolean,
  leading?: boolean
): Ref<T>
export { refThrottled as useThrottle, refThrottled as throttledRef }
```
