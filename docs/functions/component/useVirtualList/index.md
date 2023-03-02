::: info
如果您正在寻找更多功能，请使用 [`vue-virtual-scroller`](https://github.com/Akryum/vue-virtual-scroller) 
:::


# useVirtualList

创建虚拟列表。虚拟列表（有时称为虚拟滚动条）允许您高效地呈现大量项目。`container` 通过使用 `wrapper` 元素模拟容器元素的全高，它们仅呈现显示元素中的项目所需的最少数量的 `DOM` 节点。

## 演示

<demo src="./demo.vue" title="useVirtualList" desc=""></demo>

## 用法

### Simple list

```typescript
import { useVirtualList } from '@vueuse/core'

const { list, containerProps, wrapperProps } = useVirtualList(
  Array.from(Array(99999).keys()),
  {
    // 使 `itemHeight` 与项目的行保持同步。
    itemHeight: 22,
  },
)
```

### Config

| State      | Type     | Description                                                                                     |
|------------|----------|-------------------------------------------------------------------------------------------------|
| itemHeight | `number` | 确保wrapper正确计算元素的总高度                |
| itemWidth  | `number` | 确保wrapper正确计算元素的总宽度                  |
| overscan   | `number` | 预渲染的 DOM 节点数。如果滚动速度非常快，可以防止项目之间出现空白 |

`itemHeight` or `itemWidth` 必须与呈现的每一行的高度保持同步。如果您在滚动到列表底部时看到额外的空白或抖动，请确保 `itemHeight` or `itemWidth` 与行的高度相同。

### 响应式列表

```typescript
import { useVirtualList, useToggle } from '@vueuse/core'
import { computed } from 'vue'

const [isEven, toggle] = useToggle()
const allItems = Array.from(Array(99999).keys())
const filteredList = computed(() => allItems.filter(i => isEven.value ? i % 2 === 0 : i % 2 === 1))

const { list, containerProps, wrapperProps } = useVirtualList(
  filteredList,
  {
    itemHeight: 22,
  },
)
```

```html
<template>
  <p>Showing {{ isEven ? 'even' : 'odd' }} items</p>
  <button @click="toggle">Toggle Even/Odd</button>
  <div v-bind="containerProps" style="height: 300px">
    <div v-bind="wrapperProps">
      <div v-for="item in list" :key="item.index" style="height: 22px">
        Row: {{ item.data }}
      </div>
    </div>
  </div>
</template>
```

### 水平列表

```typescript
import { useVirtualList } from '@vueuse/core'

const allItems = Array.from(Array(99999).keys())

const { list, containerProps, wrapperProps } = useVirtualList(
  allItems,
  {
    itemWidth: 200,
  },
)
```

```html
<template>
  <div v-bind="containerProps" style="height: 300px">
    <div v-bind="wrapperProps">
      <div v-for="item in list" :key="item.index" style="width: 200px">
        Row: {{ item.data }}
      </div>
    </div>
  </div>
</template>
```

## 组件使用

```html
<UseVirtualList :list="list" :options="options" height="300px">
  <template #="props">
    <!-- you can get current item of list here -->
    <div style="height: 22px">Row {{ props.data }}</div>
  </template>
</UseVirtualList>
```
要滚动到特定元素，组件会公开 scrollTo(index: number) => void.


## 类型

```ts
type UseVirtualListItemSize = number | ((index: number) => number)
export interface UseHorizontalVirtualListOptions
  extends UseVirtualListOptionsBase {
  /**
   * 项目宽度，接受像素值或返回高度的函数
   *
   * @default 0
   */
  itemWidth: UseVirtualListItemSize
}
export interface UseVerticalVirtualListOptions
  extends UseVirtualListOptionsBase {
  /**
   * 项目高度，接受像素值或返回高度的函数
   *
   * @default 0
   */
  itemHeight: UseVirtualListItemSize
}
export interface UseVirtualListOptionsBase {
  /**
   * 视图区域外的额外缓冲项
   *
   * @default 5
   */
  overscan?: number
}
export type UseVirtualListOptions =
  | UseHorizontalVirtualListOptions
  | UseVerticalVirtualListOptions
export interface UseVirtualListItem<T> {
  data: T
  index: number
}
export interface UseVirtualListReturn<T> {
  list: Ref<UseVirtualListItem<T>[]>
  scrollTo: (index: number) => void
  containerProps: {
    ref: Ref<HTMLElement | null>
    onScroll: () => void
    style: StyleValue
  }
  wrapperProps: ComputedRef<{
    style:
    | {
      width: string
      height: string
      marginTop: string
    }
    | {
      width: string
      height: string
      marginLeft: string
      display: string
    }
  }>
}
/**
 * 创建虚拟列表
 */
export declare function useVirtualList<T = any>(
  list: MaybeRef<T[]>,
  options: UseVirtualListOptions
): UseVirtualListReturn<T>
```
