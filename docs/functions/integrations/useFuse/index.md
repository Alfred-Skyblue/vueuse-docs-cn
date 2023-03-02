# useFuse


使用 [Fuse.js](https://github.com/krisk/fuse) 的可组合项轻松实现模糊搜索，在[@vueuse/integrations](https://vueuse.org/integrations/README)附加组件中可用。

Fuse.js 是一个轻量级的模糊搜索库，它提供了高级搜索功能，如模糊匹配，大小写敏感，搜索范围，搜索权重，搜索结果排序等。

## 演示

<demo src="./demo.vue" title="useFuse" desc="模糊搜索"></demo>


## 安装 Fuse.js 作为对等依赖

### NPM

```bash
npm install fuse.js
```

### Yarn

```bash
yarn add fuse.js
```

## 用法

```ts
import { ref } from 'vue'
import { useFuse } from '@vueuse/integrations/useFuse'

const data = [
  'John Smith',
  'John Doe',
  'Jane Doe',
  'Phillip Green',
  'Peter Brown',
]

const input = ref('Jhon D')

const { results } = useFuse(input, data)

/*
 * Results:
 *
 * { "item": "John Doe", "index": 1 }
 * { "item": "John Smith", "index": 0 }
 * { "item": "Jane Doe", "index": 2 }
 *
 */
```

## 类型

```ts
export type FuseOptions<T> = Fuse.IFuseOptions<T>
export interface UseFuseOptions<T> {
  fuseOptions?: FuseOptions<T>
  resultLimit?: number
  matchAllWhenSearchEmpty?: boolean
}
export declare function useFuse<DataItem>(
  search: MaybeComputedRef<string>,
  data: MaybeComputedRef<DataItem[]>,
  options?: MaybeComputedRef<UseFuseOptions<DataItem>>
): {
  fuse: Ref<{
    search: <R = DataItem>(
      pattern: string | Fuse.Expression,
      options?: Fuse.FuseSearchOptions | undefined
    ) => Fuse.FuseResult<R>[]
    setCollection: (
      docs: readonly DataItem[],
      index?: Fuse.FuseIndex<DataItem> | undefined
    ) => void
    add: (doc: DataItem) => void
    remove: (predicate: (doc: DataItem, idx: number) => boolean) => DataItem[]
    removeAt: (idx: number) => void
    getIndex: () => Fuse.FuseIndex<DataItem>
  }>
  results: ComputedRef<Fuse.FuseResult<DataItem>[]>
}
export type UseFuseReturn = ReturnType<typeof useFuse>
```
