
# useTimestamp


响应式获取当前时间戳

## 演示

### 基础
<demo src="./demo.vue" title="useTimestamp" desc=""></demo>

### 组件

```html
<UseTimestamp v-slot="{ timestamp, pause, resume }">
  当前时间戳: {{ timestamp }}
  <button @click="pause()">暂停</button>
  <button @click="resume()">恢复</button>
</UseTimestamp>
```


## 用法

```ts
import { useTimestamp } from '@vueuse/core'

const timestamp = useTimestamp({ offset: 0 })
```

```ts
const { timestamp, pause, resume } = useTimestamp({ controls: true })
```

## 类型

```ts
export interface UseTimestampOptions<Controls extends boolean> {
  /**
   * 暴漏更多属性
   *
   * @default false
   */
  controls?: Controls
  /**
   * 偏移量
   *
   * @default 0
   */
  offset?: number
  /**
   * 立即调用回调
   *
   * @default true
   */
  immediate?: boolean
  /**
   * 更新间隔，或者使用requestAnimationFrame
   *
   * @default requestAnimationFrame
   */
  interval?: 'requestAnimationFrame' | number
  /**
   * 回调函数
   */
  callback?: (timestamp: number) => void
}
/**
 * 响应式获取当前时间戳
 *
 * @see https://vueuse.org/useTimestamp
 * @param options
 */
export declare function useTimestamp(
  options?: UseTimestampOptions<false>
): Ref<number>
export declare function useTimestamp(options: UseTimestampOptions<true>): {
  timestamp: Ref<number>
} & Pausable
export type UseTimestampReturn = ReturnType<typeof useTimestamp>
```
