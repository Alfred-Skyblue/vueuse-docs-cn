# useDropZone

创建一个可以放置文件的区域。

## 演示

<demo src="./demo.vue" title="useDropZone" desc="创建一个可以放置文件的区域，您可以使用外部文件拖拽进来，我会帮你显示文件详情"></demo>

## 类型

```ts
export interface UseDropZoneReturn {
  isOverDropZone: Ref<boolean>
}
export declare function useDropZone(
  target: MaybeComputedRef<HTMLElement | null | undefined>,
  onDrop?: (files: File[] | null) => void
): UseDropZoneReturn
```
