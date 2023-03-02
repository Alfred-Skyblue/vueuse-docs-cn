# useTimeAgo

响应式时间前。当时间改变时自动更新时间前的字符串。


## 演示

<demo src="./demo.vue" title="useDateFormat" desc=""></demo>


## 使用

```js
import { useTimeAgo } from '@vueuse/core'

const timeAgo = useTimeAgo(new Date(2021, 0, 1))
```

## 组件使用

```html
<UseTimeAgo v-slot="{ timeAgo }" :time="new Date(2021, 0, 1)">
  Time Ago: {{ timeAgo }}
</UseTimeAgo>
```

## 非响应式使用

如果您不需要响应式，则可以使用 `formatTimeAgo` 函数来获取格式化字符串而不是 Ref。



```js
import { formatTimeAgo } from '@vueuse/core'

const timeAgo = formatTimeAgo(new Date(2021, 0, 1)) // string
```


## 类型

```ts
export type UseTimeAgoFormatter<T = number> = (
  value: T,
  isPast: boolean
) => string
export type UseTimeAgoUnitNamesDefault =
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'year'
export interface UseTimeAgoMessagesBuiltIn {
  justNow: string
  past: string | UseTimeAgoFormatter<string>
  future: string | UseTimeAgoFormatter<string>
  invalid: string
}
export type UseTimeAgoMessages<
  UnitNames extends string = UseTimeAgoUnitNamesDefault
> = UseTimeAgoMessagesBuiltIn &
Record<UnitNames, string | UseTimeAgoFormatter<number>>
export interface FormatTimeAgoOptions<
  UnitNames extends string = UseTimeAgoUnitNamesDefault
> {
  /**
   * 显示完整日期而不是相对日期的最大单位（以毫秒为单位的差异）
   *
   * @default undefined
   */
  max?: UnitNames | number
  /**
   * 完整日期的格式化函数
   */
  fullDateFormatter?: (date: Date) => string
  /**
   * 格式化字符串的消息
   */
  messages?: UseTimeAgoMessages<UnitNames>
  /**
   * 最小显示时间单位（默认为分钟）
   *
   * @default false
   */
  showSecond?: boolean
  /**
   * 要应用的舍入方法。
   *
   * @default 'round'
   */
  rounding?: 'round' | 'ceil' | 'floor' | number
  /**
   * 自定义单位
   */
  units?: UseTimeAgoUnit<UseTimeAgoUnitNamesDefault>[]
}
export interface UseTimeAgoOptions<
  Controls extends boolean,
  UnitNames extends string = UseTimeAgoUnitNamesDefault
> extends FormatTimeAgoOptions<UnitNames> {
  /**
   * 公开更多属性
   *
   * @default false
   */
  controls?: Controls
  /**
   * 更新的间隔，设置为 0 以禁用自动更新
   *
   * @default 30_000
   */
  updateInterval?: number
}
export interface UseTimeAgoUnit<
  Unit extends string = UseTimeAgoUnitNamesDefault
> {
  max: number
  value: number
  name: Unit
}
export type UseTimeAgoReturn<Controls extends boolean = false> =
  Controls extends true
    ? {
        timeAgo: ComputedRef<string>
      } & Pausable
    : ComputedRef<string>
/**
 * 响应式时间前。当时间改变时自动更新时间前的字符串。
 *
 * @see https://vueuse.org/useTimeAgo
 * @param options
 */
export declare function useTimeAgo<
  UnitNames extends string = UseTimeAgoUnitNamesDefault
>(
  time: MaybeComputedRef<Date | number | string>,
  options?: UseTimeAgoOptions<false, UnitNames>
): UseTimeAgoReturn<false>
export declare function useTimeAgo<
  UnitNames extends string = UseTimeAgoUnitNamesDefault
>(
  time: MaybeComputedRef<Date | number | string>,
  options: UseTimeAgoOptions<true, UnitNames>
): UseTimeAgoReturn<true>
export declare function formatTimeAgo<
  UnitNames extends string = UseTimeAgoUnitNamesDefault
>(
  from: Date,
  options?: FormatTimeAgoOptions<UnitNames>,
  now?: Date | number
): string
```
