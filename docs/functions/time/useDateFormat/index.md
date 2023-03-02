# useDateFormat

根据传入的字符串获取格式化日期，灵感来自 [dayjs](https://github.com/iamkun/dayjs).

## 演示

<demo src="./demo.vue" title="useDateFormat" desc=""></demo>


## 说明

**所有可用格式的列表（默认为 HH:mm:ss）：**

| 格式     | 输出               | 描述            |
|--------|------------------|---------------|
| `YY`   | 18               | 两位数年份         |
| `YYYY` | 2018             | 四位数年份         |
| `M`    | 1-12             | 一位数月份，从一月开始   |
| `MM`   | 01-12            | 两位数月份         |
| `MMM`  | Jan-Dec          | 缩写的月份名称       |
| `MMMM` | January-December | 完整的月份名称       |
| `D`    | 1-31             | 每月的第几天        |
| `DD`   | 01-31            | 每月的第几天，两位数    |
| `H`    | 0-23             | 小时            |
| `HH`   | 00-23            | 小时两位数         |
| `h`    | 1-12             | 小时，12小时制      |
| `hh`   | 01-12            | 小时，二十四小时制，两位数 |
| `m`    | 0-59             | 分钟            |
| `mm`   | 00-59            | 分钟，两位数        |
| `s`    | 0-59             | 秒             |
| `ss`   | 00-59            | 秒，两位数         |
| `SSS`  | 000-999          | 毫秒三位数         |
| `A`    | AM PM            | 上午 下午 大写      |
| `a`    | am pm            | 上午 下午 小写      |
| `d`    | 0-6              | 星期几，星期日为 0    |
| `dd`   | S-S              | 星期几的最小名称      |
| `ddd`  | Sun-Sat          | 星期几的简称        |
| `dddd` | Sunday-Saturday  | 星期几的名称        |

- Meridiem 可通过 customMeridiem 在 `options` 中自定义.


## 用法

### 基础用法

```html
<script setup lang="ts">

import { useNow, useDateFormat } from '@vueuse/core'

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')

</script>

<template>
  <div>{{ formatted }}</div>
</template>
```

### 国际化

```html
<script setup lang="ts">

import { useNow, useDateFormat } from '@vueuse/core'

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD (ddd)', { locales: 'en-US' })

</script>

<template>
  <div>{{ formatted }}</div>
</template>
```

### 自定义 meridiem

```vue
<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'

const customMeridiem = (hours: number, minutes: number, isLowercase?: boolean, hasPeriod?: boolean) => {
  const m = hours > 11 ? (isLowercase ? 'μμ' : 'ΜΜ') : (isLowercase ? 'πμ' : 'ΠΜ')
  return hasPeriod ? m.split('').reduce((acc, current) => acc += `${current}.`, '') : m
}

const am = useDateFormat('2022-01-01 05:05:05', 'hh:mm:ss A', { customMeridiem })
// am.value = '05:05:05 ΠΜ'
const pm = useDateFormat('2022-01-01 17:05:05', 'hh:mm:ss AA', { customMeridiem })
// pm.value = '05:05:05 Μ.Μ.'
</script>
```


## 类型

```ts
export type DateLike = Date | number | string | undefined
export interface UseDateFormatOptions {
  /**
   * 语言 dd/ddd/dddd/MMM/MMMM format
   *
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
   */
  locales?: Intl.LocalesArgument
  /**
   * 自定义函数重新修改日期显示方式
   */
  customMeridiem?: (
    hours: number,
    minutes: number,
    isLowercase?: boolean,
    hasPeriod?: boolean
  ) => string
}
export declare const formatDate: (
  date: Date,
  formatStr: string,
  options?: UseDateFormatOptions
) => string
export declare const normalizeDate: (date: DateLike) => Date
/**
 * 根据传入的字符串获取格式化日期
 *
 * @see https://vueuse.org/useDateFormat
 * @param date - 要格式化的日期，可以是“Date”对象、时间戳或字符串
 * @param formatStr - 用于格式化日期的标记组合
 * @param options - UseDateFormatOptions
 */
export declare function useDateFormat(
  date: MaybeComputedRef<DateLike>,
  formatStr?: MaybeComputedRef<string>,
  options?: UseDateFormatOptions
): ComputedRef<string>
export type UseDateFormatReturn = ReturnType<typeof useDateFormat>
```
