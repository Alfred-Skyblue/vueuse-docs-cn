# useNProgress

[`nprogress`](https://github.com/rstacruz/nprogress) 包装器，在[@vueuse/integrations](https://vueuse.org/integrations/README)附加组件中可用。

nprogress 是一个轻量级的进度条，用于页面或资源的加载进度。


## 演示

<demo src="./demo.vue" title="useNProgress" desc=""></demo>

## 安装 

```bash
npm i nprogress
```

## 用法

```js {6}
import { useNProgress } from '@vueuse/integrations/useNProgress'

const { isLoading } = useNProgress()

function toggle() {
  isLoading.value = !isLoading.value
}
```

### 使用进度百分比

您可以传递一个百分比来指示栏应该从哪里开始。

```js {3}
import { useNProgress } from '@vueuse/integrations/useNProgress'

const { progress } = useNProgress(0.5)

function done() {
  progress.value = 1.0
}
```

> To change the progress percentage, set `progress.value = n`, where n is a number between 0..1.

### 定制化

只需根据自己的喜好修改 [nprogress.css](http://ricostacruz.com/nprogress/nprogress.css) 即可。提示：您可能只想查找和替换 #29d 的出现。

您可以通过将对象作为第二个参数传递来[配置它](https://github.com/rstacruz/nprogress#configuration)。



```js
import { useNProgress } from '@vueuse/integrations/useNProgress'

useNProgress(null, {
  minimum: 0.1,
  // ...
})
```


## 类型

```ts
export type UseNProgressOptions = Partial<NProgressOptions>
/**
 * 响应式进度条
 *
 * @see https://vueuse.org/useNProgress
 */
export declare function useNProgress(
  currentProgress?: MaybeComputedRef<number | null | undefined>,
  options?: UseNProgressOptions
): {
  isLoading: WritableComputedRef<boolean>
  progress: Ref<number | (() => number | null | undefined) | null | undefined>
  start: () => nprogress.NProgress
  done: (force?: boolean | undefined) => nprogress.NProgress
  remove: () => void
}
export type UseNProgressReturn = ReturnType<typeof useNProgress>
```
