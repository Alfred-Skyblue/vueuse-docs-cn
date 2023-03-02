# useLastChanged

记录最后一次更改的时间戳

## 演示

<demo src="./demo.vue" title="useLastChanged" desc="记录最后一次更改的时间戳"></demo>

## 类型

```ts
export interface UseLastChangedOptions<
    Immediate extends boolean,
    InitialValue extends number | null | undefined = undefined
> extends WatchOptions<Immediate> {
  initialValue?: InitialValue
}
/**
 * 记录最后一次更改的时间戳
 */
export declare function useLastChanged(source: WatchSource, options?: UseLastChangedOptions<false>): Ref<number | null>
export declare function useLastChanged(source: WatchSource, options: UseLastChangedOptions<true>): Ref<number>
export declare function useLastChanged(
  source: WatchSource,
  options: UseLastChangedOptions<boolean, number>
): Ref<number>
```
