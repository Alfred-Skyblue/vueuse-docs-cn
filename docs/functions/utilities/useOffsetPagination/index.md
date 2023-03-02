# useOffsetPagination

响应式分页器

## 演示

<demo src="./demo.vue" title="useOffsetPagination" desc="响应式分页器"></demo>

## 用法

```ts
import { useOffsetPagination } from '@vueuse/core'

function fetchData({ currentPage, currentPageSize }: { currentPage: number; currentPageSize: number }) {
  fetch(currentPage, currentPageSize).then((responseData) => {
    data.value = responseData
  })
}

const {
  currentPage,
  currentPageSize,
  pageCount,
  isFirstPage,
  isLastPage,
  prev,
  next,
} = useOffsetPagination({
  total: database.value.length,
  page: 1,
  pageSize,
  onPageChange: fetchData,
  onPageSizeChange: fetchData,
})
```

## 组件使用

```html
<UseOffsetPagination
  v-slot="{
    currentPage,
    currentPageSize,
    next,
    prev,
    pageCount,
    isFirstPage,
    isLastPage
  }"
  :total="database.length"
  @page-change="fetchData"
  @page-size-change="fetchData"
>
  <div class="gap-x-4 gap-y-2 grid-cols-2 inline-grid items-center">
    <div opacity="50">
      总条数:
    </div>
    <div>{{ database.length }}</div>
    <div opacity="50">
        页数:
    </div>
    <div>{{ pageCount }}</div>
    <div opacity="50">
        分页数量:
    </div>
    <div>{{ currentPageSize }}</div>
    <div opacity="50">
      当前页:
    </div>
    <div>{{ currentPage }}</div>
    <div opacity="50">
        是第一页:
    </div>
    <div>{{ isFirstPage }}</div>
    <div opacity="50">
      是最后一页:
    </div>
    <div>{{ isLastPage }}</div>
  </div>
  <div>
    <button :disabled="isFirstPage" @click="prev">
      上一页
    </button>
    <button :disabled="isLastPage" @click="next">
      下一页
    </button>
  </div>
</UseOffsetPagination>
```

组件事件支持 `props` 事件回调和事件监听器。

事件监听:
```html
<UseOffsetPagination
  v-slot="{
    currentPage,
    currentPageSize,
    next,
    prev,
    pageCount,
    isFirstPage,
    isLastPage
  }"
  :total="database.length"
  @page-change="fetchData"
  @page-size-change="fetchData"
  @page-count-change="onPageCountChange"
>
  <!-- your code -->
</UseOffsetPagination>
```

或者事件回调:

```html
<UseOffsetPagination
  v-slot="{
    currentPage,
    currentPageSize,
    next,
    prev,
    pageCount,
    isFirstPage,
    isLastPage
  }"
  :total="database.length"
  :on-page-change="fetchData"
  :on-page-size-change="fetchData"
  :on-page-count-change="onPageCountChange"
>
  <!-- your code -->
</UseOffsetPagination>
```


## 类型

```ts
export interface UseOffsetPaginationOptions {
  /**
   * 总数
   */
  total?: MaybeRef<number>
  /**
   * 每页显示的项目数
   * @default 10
   */
  pageSize?: MaybeRef<number>
  /**
   * 当前页码
   * @default 1
   */
  page?: MaybeRef<number>
  /**
   * `page` 改变时的回调。
   */
  onPageChange?: (
    returnValue: UnwrapNestedRefs<UseOffsetPaginationReturn>
  ) => unknown
  /**
   * `pageSize` 改变时的回调。
   */
  onPageSizeChange?: (
    returnValue: UnwrapNestedRefs<UseOffsetPaginationReturn>
  ) => unknown
  /**
   * `pageCount` 改变时的回调。
   */
  onPageCountChange?: (
    returnValue: UnwrapNestedRefs<UseOffsetPaginationReturn>
  ) => unknown
}
export interface UseOffsetPaginationReturn {
  currentPage: Ref<number>
  currentPageSize: Ref<number>
  pageCount: ComputedRef<number>
  isFirstPage: ComputedRef<boolean>
  isLastPage: ComputedRef<boolean>
  prev: () => void
  next: () => void
}
export type UseOffsetPaginationInfinityPageReturn = Omit<
    UseOffsetPaginationReturn,
    'isLastPage'
    >
export declare function useOffsetPagination(
  options: Omit<UseOffsetPaginationOptions, 'total'>
): UseOffsetPaginationInfinityPageReturn
export declare function useOffsetPagination(
  options: UseOffsetPaginationOptions
): UseOffsetPaginationReturn
```
